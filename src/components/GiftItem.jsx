import PropTypes from "prop-types";


const GiftItem = ({ title, url }) => {
  // console.log(title)
  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{title}</p>
    </div>
  )
}
GiftItem.propTypes ={
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
export default GiftItem;
