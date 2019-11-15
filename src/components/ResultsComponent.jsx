import React from 'react';

const ResultsComponent = (props) => {

  const elements = [
    {title: "Wow", link: 'https://media.giphy.com/media/65D9lmbH8Nn8KKQRqR/source.gif'},
    {title: "Overwatch", link: 'https://media.giphy.com/media/xT4uQ8A5wJ1X0OsD3G/source.gif'}
  ]

  const handleItems = (items) => {
    return (
      items.map(item => {
        return (
          <div>
            {item.title}
            <img src={item.link}></img>
          </div>
        );
      })
    )
  }
  

  return (
    <div>
      {handleItems(elements)}
    </div>
  )
}

export default ResultsComponent;