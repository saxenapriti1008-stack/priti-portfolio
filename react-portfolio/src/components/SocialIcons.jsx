import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const SocialIcons = () => {
  const iconStyle = {
    color: '#333',
    fontSize: '24px',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  }

  const containerStyle = {
    display: 'flex',
    gap: '20px',
    margin: '20px 0',
  }

  return (
    <div style={containerStyle}>
      <a 
        href="https://linkedin.com/in/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        style={iconStyle}
        onMouseEnter={(e) => e.currentTarget.style.color = '#666'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a 
        href="https://github.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub"
        style={iconStyle}
        onMouseEnter={(e) => e.currentTarget.style.color = '#666'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  )
}

export default SocialIcons