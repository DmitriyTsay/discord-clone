import React from 'react'
import { useNavigate } from 'react-router-dom'

// Icons
import { GrAdd } from 'react-icons/gr';

const ChannelCard = ({img, name, page, handleClick, selected}) => {

  const [ isMouseOn, setIsMouseOn ] = React.useState(false);

  const navigate = useNavigate();

  const showModal = () => {
    setIsMouseOn(true);
  }

  const closeModal = () => {
    setIsMouseOn(false);
  }

  return (
    <div className='channel-card' onClick={handleClick}>
        <div className={`channel-card__img ${selected && 'selected'}`}>
            {img ? <img 
              src={img} 
              alt='channel' 
              onClick={() => navigate(page)}
              onMouseEnter={showModal}
              onMouseLeave={closeModal}
            /> : <GrAdd />}
            {isMouseOn && <div className='channel-card__modal'>
              <p className='w600'>{name}</p>
            </div>}
        </div>
        {page === '/' && <div class='sidenav__divider'></div>}
    </div>
  )
}

export default ChannelCard