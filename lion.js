/**
 * Anurag Pandey Portfolio — Real Lion Cinematic Intro Animation
 * 
 * Features:
 * - Ultra-high-resolution photorealistic African male lion cutouts (running, leaping, roaring).
 * - 3D Perspective trajectory: sprints from deep distant right horizon (scale: 0.08),
 *   gallops forward with realistic stride dynamics, gathers power, takes a massive
 *   mid-air leap ("challang"), and bursts straight through the screen (scale: 6.5x+).
 * - Real claw streaks across the lens, radial shockwaves, and whole-page screen shake.
 * - Multi-layer predatory roar audio synthesis (sub-bass chest rumble, guttural larynx flutter,
 *   air blast snarl, gallop ground thuds).
 * - Executes automatically once per session on initial load.
 * - Replayable anytime via header button ("🦁 Leap"), CLI command ("lion"), or window.replayLionIntro().
 * - Non-blocking: gracefully dissolves, removes overlay from DOM, and includes instant Skip [Esc].
 */

(function () {
  const SESSION_KEY = "ap_lion_intro_shown";

  // Preload Real Lion Assets
  const ASSETS = {
    run: "assets/lion_run.png",       // Real African lion running/striding
    roar: "assets/lion_roar.png",     // Real ferocious roaring lion face with open fangs & mane
    front: "assets/lion_front.png",   // Real lion facing forward
    strike: "assets/lion_strike.png"  // High-res fierce roar strike
  };

  const loadedImages = {};

  function preloadImage(key, src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        loadedImages[key] = img;
        resolve(img);
      };
      img.onerror = () => {
        console.warn(`[LionIntro] Could not load image ${src}, fallback enabled.`);
        resolve(null);
      };
      img.src = src;
    });
  }

  // Zero-latency Predatory Web Audio Synthesizer
  let audioCtx = null;
  function getAudioCtx() {
    try {
      if (!audioCtx) {
        const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
        if (AudioCtxClass) audioCtx = new AudioCtxClass();
      }
      if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
      return audioCtx;
    } catch {
      return null;
    }
  }

  function playGallopStep(intensity = 1) {
    const actx = getAudioCtx();
    if (!actx) return;
    try {
      const now = actx.currentTime;
      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(75, now);
      osc.frequency.exponentialRampToValueAtTime(28, now + 0.09);
      const vol = Math.min(0.08, 0.012 * intensity);
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
      osc.connect(gain);
      gain.connect(actx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } catch {}
  }

  function playPredatoryRoar() {
    const actx = getAudioCtx();
    if (!actx) return;
    try {
      const now = actx.currentTime;

      // 1. Sub-bass Chest Thump / Ground Impact (40Hz - 90Hz)
      const subOsc = actx.createOscillator();
      const subGain = actx.createGain();
      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(115, now);
      subOsc.frequency.exponentialRampToValueAtTime(36, now + 0.5);
      subGain.gain.setValueAtTime(0.24, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
      subOsc.connect(subGain);
      subGain.connect(actx.destination);
      subOsc.start(now);
      subOsc.stop(now + 0.9);

      // 2. Multi-layer Guttural Throat Roar (Cartilage flutter + detuned saw)
      const roarOsc1 = actx.createOscillator();
      const roarOsc2 = actx.createOscillator();
      const roarGain = actx.createGain();
      const roarFilter = actx.createBiquadFilter();

      roarOsc1.type = "sawtooth";
      roarOsc2.type = "sawtooth";
      roarOsc1.frequency.setValueAtTime(76, now);
      roarOsc1.frequency.linearRampToValueAtTime(155, now + 0.25);
      roarOsc1.frequency.exponentialRampToValueAtTime(48, now + 1.1);

      roarOsc2.frequency.setValueAtTime(79, now);
      roarOsc2.frequency.linearRampToValueAtTime(162, now + 0.25);
      roarOsc2.frequency.exponentialRampToValueAtTime(51, now + 1.1);

      // Resonant vocal tract formant filter
      roarFilter.type = "bandpass";
      roarFilter.frequency.setValueAtTime(290, now);
      roarFilter.frequency.linearRampToValueAtTime(560, now + 0.3);
      roarFilter.frequency.exponentialRampToValueAtTime(150, now + 1.1);
      roarFilter.Q.setValueAtTime(3.4, now);

      // LFO for throat vibrato / snarling cartilage flutter (28 Hz)
      const lfo = actx.createOscillator();
      const lfoGain = actx.createGain();
      lfo.type = "sine";
      lfo.frequency.setValueAtTime(28, now);
      lfoGain.gain.setValueAtTime(0.09, now);
      lfo.connect(lfoGain.gain);

      roarGain.gain.setValueAtTime(0.01, now);
      roarGain.gain.linearRampToValueAtTime(0.26, now + 0.2);
      roarGain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);

      roarOsc1.connect(roarFilter);
      roarOsc2.connect(roarFilter);
      roarFilter.connect(roarGain);
      roarGain.connect(actx.destination);

      roarOsc1.start(now);
      roarOsc2.start(now);
      lfo.start(now);
      roarOsc1.stop(now + 1.1);
      roarOsc2.stop(now + 1.1);
      lfo.stop(now + 1.1);

      // 3. High Air Blast / Ferocious Snarl Noise
      const bufferSize = Math.floor(actx.sampleRate * 0.9);
      const noiseBuffer = actx.createBuffer(1, bufferSize, actx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = actx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const noiseFilter = actx.createBiquadFilter();
      noiseFilter.type = "bandpass";
      noiseFilter.frequency.setValueAtTime(1150, now);
      noiseFilter.frequency.exponentialRampToValueAtTime(420, now + 0.85);
      noiseFilter.Q.setValueAtTime(2.0, now);

      const noiseGain = actx.createGain();
      noiseGain.gain.setValueAtTime(0.001, now);
      noiseGain.gain.linearRampToValueAtTime(0.14, now + 0.18);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(actx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 0.85);
    } catch {}
  }

  // Master Intro Runner Function
  function launchRealLionIntro(isForced = false) {
    if (!isForced && sessionStorage.getItem(SESSION_KEY)) {
      return; // Already viewed in this session
    }

    // Clean up any existing overlay
    const prev = document.getElementById("lion-intro-overlay");
    if (prev) prev.remove();

    // Create Intro Container & Canvas
    const introWrap = document.createElement("div");
    introWrap.id = "lion-intro-overlay";
    introWrap.className = "lion-intro-overlay";
    introWrap.setAttribute("aria-hidden", "true");

    introWrap.innerHTML = `
      <canvas id="lion-intro-canvas" class="lion-intro-canvas"></canvas>
      <div class="lion-shockwave" id="lion-shockwave"></div>
      <div class="lion-claw-slash" id="lion-claw-slash">
        <svg class="claw-scratch-svg" viewBox="0 0 1000 600" preserveAspectRatio="none">
          <path class="claw-line line-1" d="M150,80 Q450,280 750,480" />
          <path class="claw-line line-2" d="M220,50 Q520,260 820,460" />
          <path class="claw-line line-3" d="M290,20 Q590,240 890,440" />
        </svg>
      </div>
      <div class="lion-hud-tag" id="lion-hud-tag">
        <span class="hud-tag-icon">🦁</span>
        <span class="hud-tag-text">ANURAG PANDEY // THE APEX REAL LION</span>
      </div>
      <button type="button" class="lion-skip-btn" id="lion-skip-btn" title="Skip Intro">
        Skip [Esc] &times;
      </button>
    `;

    document.body.prepend(introWrap);

    const canvas = document.getElementById("lion-intro-canvas");
    const ctx = canvas.getContext("2d");
    const shockwave = document.getElementById("lion-shockwave");
    const clawSlash = document.getElementById("lion-claw-slash");
    const skipBtn = document.getElementById("lion-skip-btn");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", handleResize);

    // Particle Systems (Dust Clouds, Glowing Embers, Speed Lines)
    const dustParticles = [];
    const embers = [];
    const speedLines = [];

    function spawnDustPuff(x, y, scale = 1) {
      const count = 6;
      for (let i = 0; i < count; i++) {
        dustParticles.push({
          x: x + (Math.random() - 0.5) * 35 * scale,
          y: y + (Math.random() - 0.5) * 15 * scale,
          vx: (Math.random() * 3 + 1) * scale, // drifts back to the right
          vy: (Math.random() * -1.8 - 0.4) * scale,
          radius: (Math.random() * 16 + 8) * scale,
          maxRadius: (Math.random() * 38 + 20) * scale,
          alpha: 0.55,
          color: "rgba(220, 195, 160, "
        });
      }
    }

    function spawnEmbers(x, y, count = 5, scale = 1, vxMod = 0) {
      for (let i = 0; i < count; i++) {
        embers.push({
          x: x + (Math.random() - 0.5) * 40 * scale,
          y: y + (Math.random() - 0.5) * 30 * scale,
          vx: (Math.random() * -4 - 1 + vxMod) * scale,
          vy: (Math.random() - 0.5) * 3.5 * scale,
          life: 1.0,
          decay: Math.random() * 0.035 + 0.02,
          size: (Math.random() * 5 + 2) * scale,
          color: Math.random() > 0.35 ? "#ffb700" : "#ff5500"
        });
      }
    }

    function spawnSpeedLines(x, y, scale = 1) {
      for (let i = 0; i < 4; i++) {
        speedLines.push({
          x: x + (Math.random() - 0.5) * 150 * scale,
          y: y + (Math.random() - 0.5) * 100 * scale,
          len: (Math.random() * 140 + 80) * scale,
          angle: -0.3 + (Math.random() - 0.5) * 0.2,
          alpha: 0.8,
          decay: 0.07,
          width: Math.random() * 3 + 1.5
        });
      }
    }

    // Animation Timing & State
    let startTime = null;
    const DURATION = 3900; // 3.9 seconds total cinematic experience
    let animationFrameId = null;
    let hasRoared = false;
    let lastStepTime = 0;

    function render(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1.0, elapsed / DURATION);

      ctx.clearRect(0, 0, width, height);

      // --- CALCULATE REAL LION 3D TRAJECTORY ---
      // Phase 1 (0.00 -> 0.60): Galloping in from deep right background to midground
      // Phase 2 (0.60 -> 0.68): Crouching down, coiling muscles for the leap
      // Phase 3 (0.68 -> 0.88): The Epic Leap ("Challang") upwards through 3D space
      // Phase 4 (0.88 -> 1.00): Bursting directly through the screen lens!
      let lionX, lionY, lionScale, lionRotation, lionImg, lionAlpha = 1.0, stretchX = 1.0, stretchY = 1.0;

      if (progress < 0.60) {
        // --- PHASE 1: SPRINTING IN FROM DEEP RIGHT BACKGROUND ---
        const p = progress / 0.60; // 0.0 -> 1.0
        // Exponential scale bringing it smoothly from deep perspective
        lionScale = 0.09 + Math.pow(p, 1.85) * 0.86; // 0.09 -> 0.95
        lionX = width * (0.92 - p * 0.46); // 92% screen width -> 46% width
        // Gallop vertical bobbing & spinal pitch
        const gallopBob = Math.sin(p * 26) * (14 * lionScale);
        lionY = height * (0.42 + Math.pow(p, 1.4) * 0.18) + gallopBob;
        lionRotation = -0.06 + Math.sin(p * 26) * 0.06;
        // Subtle stride squash/stretch
        stretchX = 1.0 + Math.sin(p * 26) * 0.04;
        stretchY = 1.0 - Math.sin(p * 26) * 0.04;

        lionImg = loadedImages.run;

        // Paw ground contact sound & dust plumes
        if (timestamp - lastStepTime > 160 / (1 + p * 0.6)) {
          lastStepTime = timestamp;
          playGallopStep(1 + p * 4);
          spawnDustPuff(lionX + 35 * lionScale, lionY + 50 * lionScale, lionScale);
          spawnEmbers(lionX + 30 * lionScale, lionY + 45 * lionScale, 3, lionScale, 2);
        }
      } else if (progress < 0.68) {
        // --- PHASE 2: POWER GATHERING / COILING ---
        const p = (progress - 0.60) / 0.08; // 0.0 -> 1.0
        lionScale = 0.95 + p * 0.12; // 0.95 -> 1.07
        lionX = width * (0.46 - p * 0.04);
        // Lion dips down into ready-to-pounce crouch
        lionY = height * 0.60 + Math.sin(p * Math.PI) * 12;
        lionRotation = -0.02 + p * -0.15; // tilts backwards slightly preparing to spring
        stretchX = 1.08;
        stretchY = 0.90; // squashes down like a coiled spring!

        lionImg = loadedImages.run;
        spawnDustPuff(lionX + 20 * lionScale, lionY + 60 * lionScale, lionScale * 1.2);
      } else {
        // --- PHASES 3 & 4: THE MASSIVE LEAP ("CHALLANG") & SCREEN BURST ---
        const leapProgress = (progress - 0.68) / 0.32; // 0.0 -> 1.0
        const jumpArc = Math.sin(Math.min(1.0, leapProgress * 1.3) * Math.PI * 0.85);

        // Exponential surge bursting right out of the screen
        lionScale = 1.07 + Math.pow(leapProgress, 2.4) * 6.2; // 1.07 -> 7.27!
        lionX = width * (0.42 - leapProgress * 0.15); // surges forward and slightly left
        lionY = height * (0.60 - jumpArc * 0.36); // launches high into the air!
        lionRotation = -0.28 + leapProgress * 0.38; // tilts up on jump, levels out

        // Use the ferocious roaring lion image for the mid-air leap and climax
        lionImg = loadedImages.roar || loadedImages.run;

        // Trigger Climax Effects once as the leap reaches peak velocity
        if (!hasRoared && leapProgress > 0.40) {
          hasRoared = true;
          playPredatoryRoar();

          if (shockwave) shockwave.classList.add("active");
          if (clawSlash) clawSlash.classList.add("active");
          document.body.classList.add("lion-screen-shake");
          setTimeout(() => document.body.classList.remove("lion-screen-shake"), 800);
        }

        // Mid-air speed lines & flaming mane embers
        spawnEmbers(lionX, lionY, 8, Math.min(lionScale, 3.5), -5);
        if (leapProgress > 0.25 && leapProgress < 0.85) {
          spawnSpeedLines(lionX, lionY, lionScale);
        }

        // Dissolve as it passes through the camera plane
        if (leapProgress > 0.82) {
          lionAlpha = Math.max(0, 1.0 - (leapProgress - 0.82) / 0.18);
        }
      }

      // 1. Draw Dust Particle Clouds
      for (let i = dustParticles.length - 1; i >= 0; i--) {
        const d = dustParticles[i];
        d.x += d.vx;
        d.y += d.vy;
        d.radius += 0.4;
        d.alpha -= 0.016;
        if (d.alpha <= 0) {
          dustParticles.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = d.color + d.alpha + ")";
        ctx.fill();
      }

      // 2. Draw Speed Lines
      for (let i = speedLines.length - 1; i >= 0; i--) {
        const sl = speedLines[i];
        sl.alpha -= sl.decay;
        if (sl.alpha <= 0) {
          speedLines.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(sl.x, sl.y);
        ctx.lineTo(sl.x + Math.cos(sl.angle) * sl.len, sl.y + Math.sin(sl.angle) * sl.len);
        ctx.strokeStyle = `rgba(255, 220, 130, ${sl.alpha})`;
        ctx.lineWidth = sl.width;
        ctx.lineCap = "round";
        ctx.stroke();
        ctx.restore();
      }

      // 3. Draw Dynamic Ground Shadow
      if (progress < 0.82) {
        ctx.save();
        const shadowOpacity = Math.max(0, 0.45 * (1 - (progress > 0.68 ? (progress - 0.68) / 0.14 : 0)));
        ctx.beginPath();
        const groundY = height * (0.42 + Math.min(1.0, progress / 0.65) * 0.22);
        ctx.ellipse(lionX, groundY + 45 * lionScale, 65 * lionScale, 18 * lionScale, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${shadowOpacity})`;
        ctx.filter = `blur(${Math.max(2, lionScale * 6)}px)`;
        ctx.fill();
        ctx.restore();
      }

      // 4. Draw The Real Lion Photographic Cutout
      if (lionImg && lionImg.complete && lionImg.naturalWidth > 0) {
        ctx.save();
        ctx.globalAlpha = lionAlpha;
        ctx.translate(lionX, lionY);
        ctx.rotate(lionRotation);
        ctx.scale(stretchX, stretchY);

        // lion_run.png faces right natively; flip horizontally (-1) so it runs right-to-left!
        // lion_roar.png faces right/up; flip horizontally (-1) so it attacks towards viewer's left!
        ctx.scale(-lionScale, lionScale);

        // Center normalized dimensions
        const baseW = 420;
        const aspect = lionImg.naturalHeight / lionImg.naturalWidth;
        const baseH = baseW * aspect;

        // Subtle motion blur in deep distance
        if (lionScale < 0.25) {
          ctx.filter = `blur(${Math.max(0, (0.25 - lionScale) * 6)}px)`;
        } else {
          ctx.filter = "none";
        }

        ctx.drawImage(lionImg, -baseW / 2, -baseH / 2, baseW, baseH);
        ctx.restore();
      }

      // 5. Draw Embers & Claw Sparks
      for (let i = embers.length - 1; i >= 0; i--) {
        const e = embers[i];
        e.x += e.vx;
        e.y += e.vy;
        e.life -= e.decay;
        if (e.life <= 0) {
          embers.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size * e.life, 0, Math.PI * 2);
        ctx.fillStyle = e.color;
        ctx.globalAlpha = e.life * 0.9;
        ctx.shadowBlur = 14 * e.life;
        ctx.shadowColor = e.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;

      // Overlay dissolve towards completion
      if (progress > 0.88) {
        const fadeOut = (progress - 0.88) / 0.12;
        introWrap.style.opacity = String(Math.max(0, 1 - fadeOut));
      }

      if (progress < 1.0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        finishIntro();
      }
    }

    function finishIntro() {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      sessionStorage.setItem(SESSION_KEY, "true");
      introWrap.style.transition = "opacity 0.45s ease-out";
      introWrap.style.opacity = "0";
      setTimeout(() => {
        if (introWrap && introWrap.parentNode) {
          introWrap.remove();
        }
      }, 480);
    }

    // Skip Handlers
    if (skipBtn) {
      skipBtn.addEventListener("click", finishIntro);
    }

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        window.removeEventListener("keydown", handleKeyDown);
        finishIntro();
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    // Start Animation Frame Loop
    requestAnimationFrame(render);
  }

  // Preload assets, then trigger launch
  Promise.all([
    preloadImage("run", ASSETS.run),
    preloadImage("roar", ASSETS.roar),
    preloadImage("front", ASSETS.front),
    preloadImage("strike", ASSETS.strike)
  ]).then(() => {
    // Assets ready; launch intro if not previously seen
    launchRealLionIntro(false);
  });

  // Global Replay Trigger
  window.replayLionIntro = function () {
    sessionStorage.removeItem(SESSION_KEY);
    // Directly launch real lion intro immediately with zero page-reload lag!
    launchRealLionIntro(true);
  };
})();
