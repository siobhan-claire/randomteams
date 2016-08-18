import React from 'react'

export default React.createClass({
  propTypes: {
    selectedCategory: React.PropTypes.string.isRequired
  },
  render () {
    const categories = ["mario", "pacman", "zelda", "sonic", "donkeykong"]
    const categoriesElements = categories.map((elem, i) => {
      if (elem === this.props.selectedCategory) {
        return <img key={i} className="selected" src={"./images/" + elem + ".png"} alt={elem}/>
      } else {
        return <img key={i} src={"./images/" + elem + ".png"} alt={elem}/>
      }
    })
    return (
      <div>
        {categoriesElements}
      </div>
    )
  }
})
