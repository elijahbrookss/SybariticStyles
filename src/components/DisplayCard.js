
const DisplayCard = props => {
  const image = props.image;

  return (
    <div className='display-card'>
      <img src={image} />
    </div>
  )

}

export default DisplayCard;
