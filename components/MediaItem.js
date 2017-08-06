import {Media, Panel} from 'react-bootstrap'
export default (props) => (
  <Panel {...props}>
    <Media>
      <Media.Left align="top" onClick={props.onImageClick}>
        <img src={props.img} alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>{props.title}</Media.Heading>
        {props.description}
      </Media.Body>
    </Media>
  </Panel>
)
