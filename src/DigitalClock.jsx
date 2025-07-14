import { useState, useEffect } from 'react'

function DigitalClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'radial-gradient(circle at center, #0f0f23, #000000)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'monospace',
      overflow: 'hidden'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '60px',
        background: 'linear-gradient(45deg, rgba(138, 43, 226, 0.1), rgba(0, 191, 255, 0.1))',
        borderRadius: '30px',
        border: '1px solid rgba(138, 43, 226, 0.3)',
        boxShadow: `
          0 0 50px rgba(138, 43, 226, 0.4),
          0 0 100px rgba(0, 191, 255, 0.2),
          inset 0 0 50px rgba(255, 255, 255, 0.05)
        `,
        backdropFilter: 'blur(10px)',
        position: 'relative'
      }}>
        {/* Animated corner elements */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          width: '30px',
          height: '30px',
          border: '2px solid #8a2be2',
          borderRight: 'none',
          borderBottom: 'none',
          borderRadius: '5px 0 0 0'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '30px',
          height: '30px',
          border: '2px solid #8a2be2',
          borderLeft: 'none',
          borderBottom: 'none',
          borderRadius: '0 5px 0 0'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          width: '30px',
          height: '30px',
          border: '2px solid #8a2be2',
          borderRight: 'none',
          borderTop: 'none',
          borderRadius: '0 0 0 5px'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          width: '30px',
          height: '30px',
          border: '2px solid #8a2be2',
          borderLeft: 'none',
          borderTop: 'none',
          borderRadius: '0 0 5px 0'
        }}></div>
        
        <h1 style={{ 
          color: '#00bfff',
          fontSize: '28px',
          marginBottom: '30px',
          letterSpacing: '4px',
          textShadow: '0 0 20px #00bfff',
          fontWeight: '300'
        }}>
          HOLOGRAM CLOCK
        </h1>
        
        <div style={{ 
          fontSize: '85px',
          fontWeight: '300',
          color: '#ffffff',
          textShadow: `
            0 0 10px #8a2be2,
            0 0 20px #8a2be2,
            0 0 30px #8a2be2,
            0 0 40px #00bfff
          `,
          letterSpacing: '8px',
          fontFamily: 'Courier New, monospace',
          marginBottom: '20px'
        }}>
          {time.toLocaleTimeString()}
        </div>
        
        <div style={{
          color: '#00bfff',
          fontSize: '22px',
          opacity: '0.8',
          textShadow: '0 0 15px #00bfff',
          letterSpacing: '2px'
        }}>
          {time.toLocaleDateString()}
        </div>
        
        {/* Scanning line effect */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #00bfff, transparent)',
          animation: 'scan 3s linear infinite'
        }}></div>
      </div>
      
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(400px); }
        }
      `}</style>
    </div>
  )
}

export default DigitalClock