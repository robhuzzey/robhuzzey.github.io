import Layout from '../components/Layout'
import {Grid, Row, Col} from 'react-bootstrap'
import MediaItem from '../components/MediaItem'

export default () => (
  <Layout title='Rob Huzzey - Web Developer - Kent'>
    <Grid>
      <Row>
        <Col xs={12} md={8}>
          <MediaItem className='whoAmI' 
            title='Rob Huzzey'
            description={(
              <ul>
                <li>10 years of experience</li>
                <li>Architecture &amp; Programming</li>
              </ul>
            )}
            img={'/static/rob-huzzey-web-developer.jpeg'}
          />
        </Col>
        <Col className='hidden-xs' xs={0} md={4}>
          <p>Driven by a passion for learning, Rob is also heavily into personal fitness and is currently learning as much as possible in the Gym</p>
        </Col>
      </Row>
    </Grid>
  </Layout>
)
