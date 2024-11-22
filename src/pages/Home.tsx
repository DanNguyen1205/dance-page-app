import Video from '../components/Video/Video'
import Parallax from '../components/Parallax/Parallax'
import Calendar from '../components/Calendar/Calendar'
import News from '../components/News/News'
import Map from '../components/Map/Map'
import InstructorList from '../components/Instructor/InstructorList'


const Home = () => {
  return (
    <>
      <Video/>
      <Parallax/>
      <InstructorList/>
      <Calendar/>
      <News/>
      <Map/>
    </>
  )
}

export default Home