import "../styles/ListingCard.scss"

const ListingCard = (_id, creator, listingPhotoPaths, city, province, country, category, type, price) => {

  return (
    <div className="listing-card">
      <div className="slider-container">
        <div className="slider">{listingPhotoPaths?.map((photo, index) => (
            <div key={index} className="slide">
                <img src={`http://localhost:3000/${photo.replace("public","")}`} alt="listing photo"/>
            </div>
        ))}</div>
      </div>
    </div>
  )
}

export default ListingCard
