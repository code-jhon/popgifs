import React from 'react';
import { Row } from 'reactstrap';
import ResultItemComponent from "./ResultItemComponent";

const ResultsComponent = (props) => {

  const elements = [
    {title: "Wow", link: 'https://media.giphy.com/media/65D9lmbH8Nn8KKQRqR/source.gif'},
    {title: "Overwatch", link: 'https://media.giphy.com/media/xT4uQ8A5wJ1X0OsD3G/source.gif'},
    {title: "Fortnite", link: 'https://media.giphy.com/media/65VBy9Ccvyww9or9IR/giphy.gif'},
    {title: "Fortnite", link: 'https://media.giphy.com/media/65VBy9Ccvyww9or9IR/giphy.gif'},
    {title: "Fortnite", link: 'https://media.giphy.com/media/65VBy9Ccvyww9or9IR/giphy.gif'},
    {title: "Fortnite", link: 'https://media.giphy.com/media/65VBy9Ccvyww9or9IR/giphy.gif'},
    {title: "Fortnite", link: 'https://media.giphy.com/media/65VBy9Ccvyww9or9IR/giphy.gif'},
    {title: "Fortnite", link: 'https://media.giphy.com/media/65VBy9Ccvyww9or9IR/giphy.gif'},

  ]

  const handleItems = (items) => {
    return (
      items.map(item => {

        const title = item && item.title,
              link   = item && item.link;

        return (
          <ResultItemComponent title={title} link={link} />
        );
      })
    )
  }
  

  return (
    <div className="items-context">
      <Row className="items-box">
        {handleItems(elements)}
      </Row>
    </div>
  )
}

export default ResultsComponent;