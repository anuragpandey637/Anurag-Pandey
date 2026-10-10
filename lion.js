/**
 * Anurag Pandey Portfolio — Cinematic 3D Celestial Cyber Lion Intro
 * Running from right deep background, charging forward, and leaping ("challang")
 * directly out of the screen on initial load.
 */

(function () {
  // Check if user already saw the intro in this session (optional, but run automatically)
  // To ensure it happens on load as requested:
  const HAS_SEEN = sessionStorage.getItem("ap_lion_intro_shown");

  // Create Intro Container & Canvas
  const introWrap = document.createElement("div");
  introWrap.id = "lion-intro-overlay";
  introWrap.className = "lion-intro-overlay";
  introWrap.setAttribute("aria-hidden", "true");

  introWrap.innerHTML = `
    <canvas id="lion-intro-canvas" class="lion-intro-canvas"></canvas>
    <div class="lion-shockwave" id="lion-shockwave"></div>
    <div class="lion-claw-slash" id="lion-claw-slash"></div>
    <div class="lion-hud-tag" id="lion-hud-tag">
      <span class="hud-tag-icon">⚡</span>
      <span class="hud-tag-text">NEURAL BEAST PROTOCOL // INITIALIZING</span>
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

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Zero-latency Web Audio Synthesizer for Roar & Whoosh
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

  function playGallopBeat(pitch = 90) {
    const actx = getAudioCtx();
    if (!actx) return;
    try {
      const now = actx.currentTime;
      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(pitch, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.08);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(actx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } catch {}
  }

  function playLeapRoar() {
    const actx = getAudioCtx();
    if (!actx) return;
    try {
      const now = actx.currentTime;
      // 1. Bass Energy Roar / Impact
      const osc1 = actx.createOscillator();
      const gain1 = actx.createGain();
      osc1.type = "sawtooth";
      osc1.frequency.setValueAtTime(120, now);
      osc1.frequency.linearRampToValueAtTime(260, now + 0.25);
      osc1.frequency.exponentialRampToValueAtTime(40, now + 0.85);

      gain1.gain.setValueAtTime(0.001, now);
      gain1.gain.linearRampToValueAtTime(0.12, now + 0.2);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

      osc1.connect(gain1);
      gain1.connect(actx.destination);
      osc1.start(now);
      osc1.stop(now + 0.85);

      // 2. High Cyber Energy Sweep
      const osc2 = actx.createOscillator();
      const gain2 = actx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(320, now);
      osc2.frequency.exponentialRampToValueAtTime(1400, now + 0.45);
      gain2.gain.setValueAtTime(0.04, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc2.connect(gain2);
      gain2.connect(actx.destination);
      osc2.start(now);
      osc2.stop(now + 0.45);
    } catch {}
  }

  // Particle System (Embers, Ground Sparks & Mane Hair)
  const embers = [];
  function spawnEmbers(x, y, count = 4, scale = 1, vxMod = 0) {
    for (let i = 0; i < count; i++) {
      embers.push({
        x: x + (Math.random() - 0.5) * 30 * scale,
        y: y + (Math.random() - 0.5) * 20 * scale,
        vx: (Math.random() * -3 - 1 + vxMod) * scale,
        vy: (Math.random() - 0.5) * 2.5 * scale,
        life: 1.0,
        decay: Math.random() * 0.03 + 0.02,
        size: (Math.random() * 4 + 1.5) * scale,
        color: Math.random() > 0.4 ? "#ffb700" : "#00f0ff"
      });
    }
  }

  // Animation Timeline Controller
  let startTime = null;
  const DURATION = 3800; // 3.8 seconds total cinematic sequence
  let animationFrameId = null;
  let hasRoared = false;
  let lastBeatTime = 0;

  function render(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(1.0, elapsed / DURATION);

    ctx.clearRect(0, 0, width, height);

    // 1. Calculate Lion 3D Trajectory
    // Stage 1: Running from right deep background (progress: 0.0 -> 0.6)
    // Stage 2: Gathering power for leap (progress: 0.6 -> 0.72)
    // Stage 3: The Massive Leap / Challang (progress: 0.72 -> 1.0)
    let lionX, lionY, lionScale, lionRotation, runPhase, isLeaping, jawOpen;

    if (progress < 0.65) {
      // Galloping in from deep distance on the right
      const p = progress / 0.65;
      // Exponential curve bringing it from depth
      lionScale = 0.16 + Math.pow(p, 1.8) * 0.95; // 0.16 -> 1.11
      lionX = width * (0.88 - p * 0.45); // 88% width -> 43% width
      // Gentle running bobbing
      lionY = height * (0.42 + Math.pow(p, 1.5) * 0.18) + Math.sin(p * 22) * (14 * lionScale);
      lionRotation = -0.05 + Math.sin(p * 22) * 0.05;
      runPhase = p * 28;
      isLeaping = false;
      jawOpen = 0.15;

      // Gallop sound beat every half stride
      if (timestamp - lastBeatTime > 180 / (1 + p * 0.5)) {
        playGallopBeat(70 + p * 40);
        lastBeatTime = timestamp;
        // Paws kicking up embers
        spawnEmbers(lionX + 30 * lionScale, lionY + 45 * lionScale, 3, lionScale, -2);
      }
    } else {
      // The Epic Leap ("Challang") Towards & Through Screen!
      const leapProgress = (progress - 0.65) / 0.35; // 0.0 -> 1.0
      isLeaping = true;

      if (!hasRoared) {
        hasRoared = true;
        playLeapRoar();

        // Trigger Shockwave & Claw Slash overlay
        if (shockwave) shockwave.classList.add("active");
        if (clawSlash) clawSlash.classList.add("active");
        document.body.classList.add("lion-screen-shake");
        setTimeout(() => document.body.classList.remove("lion-screen-shake"), 750);
      }

      // Parabolic jump arc: surges upwards, then dives forward out of screen
      const jumpArc = Math.sin(leapProgress * Math.PI);
      // Exponential 3D scale bursting through camera
      lionScale = 1.11 + Math.pow(leapProgress, 2.5) * 5.2; // 1.11 -> 6.31!

      lionX = width * (0.43 - leapProgress * 0.18); // drifts to center-left
      lionY = height * (0.6 - jumpArc * 0.32); // launches up and arcs forward
      lionRotation = -0.28 + leapProgress * 0.35; // tilts up on jump, levels out
      runPhase = 0; // frozen in glorious dynamic leap pose
      jawOpen = Math.min(1.0, leapProgress * 1.6); // Roars wide open!

      // Explosive flame embers flaring from mane & claws
      spawnEmbers(lionX, lionY, 8, lionScale * 0.8, -4);
    }

    // 2. Draw Embers & Energy Trail
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
      ctx.globalAlpha = e.life * 0.8;
      ctx.shadowBlur = 12 * e.life;
      ctx.shadowColor = e.color;
      ctx.fill();
    }
    ctx.globalAlpha = 1.0;
    ctx.shadowBlur = 0;

    // 3. Draw The Celestial Cyber Lion
    drawCyberLion(ctx, lionX, lionY, lionScale, lionRotation, runPhase, isLeaping, jawOpen);

    // Fade out towards the end
    if (progress > 0.86) {
      const fadeOut = (progress - 0.86) / 0.14;
      introWrap.style.opacity = String(1 - fadeOut);
    }

    if (progress < 1.0) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      finishIntro();
    }
  }

  /**
   * Anatomical Celestial Cyber Lion Vector Renderer
   * Renders body, muscular limbs, head, roaring jaw, piercing eyes, and fiery particle mane.
   */
  function drawCyberLion(ctx, x, y, scale, rot, phase, leaping, jawOpen) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.scale(scale, scale);

    // Dynamic Colors: Blazing Gold Core with Neon Cyan Bio-Luminescence
    const goldGrad = ctx.createLinearGradient(-100, -50, 100, 50);
    goldGrad.addColorStop(0, "#fff5cc");
    goldGrad.addColorStop(0.3, "#ffb700");
    goldGrad.addColorStop(0.7, "#ff7700");
    goldGrad.addColorStop(1, "#00f0ff");

    ctx.shadowColor = "rgba(0, 240, 255, 0.7)";
    ctx.shadowBlur = 25;

    // --- LEGS CALCULATION ---
    let flAngle, frAngle, hlAngle, hrAngle;
    if (!leaping) {
      // Quadruped rotary gallop cycle
      flAngle = Math.sin(phase) * 0.85;
      frAngle = Math.sin(phase + 0.4) * 0.85;
      hlAngle = Math.sin(phase + Math.PI * 0.9) * 0.9;
      hrAngle = Math.sin(phase + Math.PI * 1.3) * 0.9;
    } else {
      // LEAP POSE: Front legs fully extended forward with claws out, hind legs extended back
      flAngle = -0.95;
      frAngle = -1.15;
      hlAngle = 1.1;
      hrAngle = 0.95;
    }

    // --- HIND LEGS (Back layer) ---
    drawLeg(ctx, 45, 15, hrAngle, false, true);

    // --- FRONT LEGS (Back layer) ---
    drawLeg(ctx, -55, 10, frAngle, true, true);

    // --- TAIL ---
    ctx.beginPath();
    ctx.moveTo(65, 0);
    const tailWiggle = Math.sin(phase * 1.4) * 20;
    ctx.bezierCurveTo(95, -20 + tailWiggle * 0.5, 125, 15 + tailWiggle, 140, -10 + tailWiggle * 1.2);
    ctx.strokeStyle = goldGrad;
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.stroke();

    // Tail tuft
    ctx.beginPath();
    ctx.arc(142, -10 + tailWiggle * 1.2, 9, 0, Math.PI * 2);
    ctx.fillStyle = "#ffb700";
    ctx.fill();

    // --- MUSCULAR TORSO & CHEST ---
    ctx.beginPath();
    // Spine
    ctx.moveTo(-60, -25);
    ctx.bezierCurveTo(-20, -32, 20, -25, 60, -15);
    // Rump
    ctx.bezierCurveTo(75, -5, 75, 15, 60, 22);
    // Flank & Belly
    ctx.bezierCurveTo(35, 12, 0, 18, -25, 26);
    // Powerful Deep Chest
    ctx.bezierCurveTo(-55, 34, -75, 20, -70, -10);
    ctx.closePath();

    ctx.fillStyle = goldGrad;
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Cyber Bio-circuit lines on torso
    ctx.beginPath();
    ctx.moveTo(-45, -5);
    ctx.lineTo(-20, 8);
    ctx.lineTo(15, -4);
    ctx.lineTo(40, 5);
    ctx.strokeStyle = "#00f0ff";
    ctx.lineWidth = 2;
    ctx.shadowColor = "#00f0ff";
    ctx.shadowBlur = 15;
    ctx.stroke();

    // --- HIND LEGS (Front layer) ---
    drawLeg(ctx, 35, 18, hlAngle, false, false);

    // --- FRONT LEGS (Front layer) ---
    drawLeg(ctx, -65, 15, flAngle, true, false);

    // --- MASSIVE ROARING LION HEAD & MANE ---
    ctx.save();
    ctx.translate(-82, -26);

    // Blazing Fiery Mane (Multi-layer spiky energy tendrils)
    const maneSpikes = [
      [-10, -50], [15, -48], [35, -35], [45, -15], [50, 10], [42, 32],
      [25, 48], [5, 52], [-18, 45], [-35, 30], [-42, 10], [-35, -15], [-25, -38]
    ];

    ctx.beginPath();
    ctx.moveTo(-10, -50);
    for (let i = 0; i < maneSpikes.length; i++) {
      const p = maneSpikes[i];
      const flutter = Math.sin(phase * 2 + i) * 6;
      ctx.lineTo(p[0] + flutter, p[1]);
    }
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 120, 0, 0.85)";
    ctx.shadowColor = "#ff7700";
    ctx.shadowBlur = 35;
    ctx.fill();

    // Inner Radiant Mane Layer
    ctx.beginPath();
    ctx.arc(0, 0, 32, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 200, 0, 0.9)";
    ctx.shadowColor = "#ffb700";
    ctx.shadowBlur = 20;
    ctx.fill();

    // Snout / Upper Jaw
    ctx.beginPath();
    ctx.moveTo(-15, -15);
    ctx.lineTo(-44, -12); // Nose bridge
    ctx.lineTo(-48, -2);  // Nose tip
    ctx.lineTo(-32, 5);   // Upper lip
    ctx.lineTo(-12, 5);
    ctx.closePath();
    ctx.fillStyle = "#fff5cc";
    ctx.fill();

    // Piercing Laser Eye
    ctx.beginPath();
    ctx.arc(-22, -10, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = "#00f0ff";
    ctx.shadowColor = "#00f0ff";
    ctx.shadowBlur = 20;
    ctx.fill();
    // Pupil
    ctx.beginPath();
    ctx.arc(-22, -10, 1.8, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();

    // Roaring Lower Jaw & Fangs
    const jawDrop = jawOpen * 22; // Opens up to 22px
    ctx.beginPath();
    ctx.moveTo(-32, 5);
    ctx.lineTo(-44, 8 + jawDrop);
    ctx.lineTo(-24, 18 + jawDrop);
    ctx.lineTo(-10, 12 + jawDrop);
    ctx.closePath();
    ctx.fillStyle = "#e07a16";
    ctx.fill();

    // Fangs (Upper & Lower)
    if (jawOpen > 0.3) {
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "#00f0ff";
      ctx.shadowBlur = 10;
      // Upper fang
      ctx.beginPath();
      ctx.moveTo(-42, -2);
      ctx.lineTo(-40, 10);
      ctx.lineTo(-37, -2);
      ctx.fill();
      // Lower fang
      ctx.beginPath();
      ctx.moveTo(-41, 7 + jawDrop);
      ctx.lineTo(-39, -3 + jawDrop * 0.3);
      ctx.lineTo(-36, 7 + jawDrop);
      ctx.fill();
    }

    ctx.restore(); // restore head
    ctx.restore(); // restore lion
  }

  /**
   * Anatomical Limb Drawer (Humerus/Femur, Radius/Tibia, Metatarsals & Claws)
   */
  function drawLeg(ctx, hipX, hipY, angle, isFront, isFar) {
    ctx.save();
    ctx.translate(hipX, hipY);
    ctx.rotate(angle);

    const length1 = isFront ? 32 : 36;
    const length2 = isFront ? 30 : 28;
    const alpha = isFar ? 0.6 : 1.0;

    ctx.globalAlpha = alpha;
    ctx.strokeStyle = isFar ? "rgba(255, 140, 0, 0.8)" : "rgba(255, 200, 0, 0.95)";
    ctx.lineWidth = isFar ? 7 : 9;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Upper Segment (Thigh / Shoulder)
    ctx.beginPath();
    ctx.moveTo(0, 0);
    const kneeX = isFront ? -12 : 14;
    const kneeY = length1;
    ctx.lineTo(kneeX, kneeY);
    ctx.stroke();

    // Lower Segment (Shin / Forearm)
    ctx.beginPath();
    ctx.moveTo(kneeX, kneeY);
    const pawX = isFront ? -22 : 6;
    const pawY = kneeY + length2;
    ctx.lineTo(pawX, pawY);
    ctx.stroke();

    // Paw & Glowing Claws
    ctx.beginPath();
    ctx.arc(pawX, pawY, 6, 0, Math.PI * 2);
    ctx.fillStyle = "#00f0ff";
    ctx.shadowColor = "#00f0ff";
    ctx.shadowBlur = 12;
    ctx.fill();

    ctx.restore();
  }

  // Finish and dismiss cleanly
  function finishIntro() {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    sessionStorage.setItem("ap_lion_intro_shown", "true");
    introWrap.style.transition = "opacity 0.5s ease-out";
    introWrap.style.opacity = "0";
    setTimeout(() => {
      introWrap.remove();
    }, 550);
  }

  // Skip handlers
  if (skipBtn) {
    skipBtn.addEventListener("click", finishIntro);
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") finishIntro();
  });

  // Start sequence
  requestAnimationFrame(render);

  // Expose Replay method globally for testing or replay buttons
  window.replayLionIntro = function () {
    sessionStorage.removeItem("ap_lion_intro_shown");
    location.reload();
  };
})();
