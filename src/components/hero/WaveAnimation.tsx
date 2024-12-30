import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseY: number;
  speed: number;
  size: number;
}

const WaveAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const initParticles = () => {
      particles.current = [];
      const particleCount = 100;
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: (canvas.width / particleCount) * i,
          y: canvas.height / 2,
          baseY: canvas.height / 2,
          speed: 0.03 + Math.random() * 0.02,
          size: 2 + Math.random() * 2
        });
      }
    };

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles and connections
      ctx.fillStyle = '#48B1BF';
      ctx.strokeStyle = '#06677D';
      ctx.lineWidth = 0.5;

      particles.current.forEach((particle, i) => {
        // Update particle position
        const time = Date.now() * particle.speed;
        const distanceFromMouse = Math.hypot(
          particle.x - mouse.current.x,
          particle.baseY - mouse.current.y
        );
        const influence = Math.max(0, 1 - distanceFromMouse / 200);
        
        particle.y = particle.baseY + 
          Math.sin(time + particle.x * 0.01) * 30 +
          Math.sin(time * 0.5) * 20 * influence;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect particles
        if (i < particles.current.length - 1) {
          const nextParticle = particles.current[i + 1];
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(nextParticle.x, nextParticle.y);
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full bg-gradient-to-br from-white/50 to-white/30"
    />
  );
};

export default WaveAnimation;