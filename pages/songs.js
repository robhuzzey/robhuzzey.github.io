import Layout from '../components/Layout'
import {Grid, Row, Col} from 'react-bootstrap'

export default () => (
  <Layout title='Songs created by Rob Huzzey'>
    <Grid>
      <Row>
        <Col xs={12} md={12}>
          <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/20829371&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        </Col>
      </Row>
    </Grid>
  </Layout>
)
