import { GrAnnounce } from 'react-icons/gr'

const Announcement = (props) => {
  return (
    <div className="w-full bg-black text-white py-3 px-2 text-xs xs:text-base">
      <p className="font-roboto-s font-medium text-center flex justify-center items-center gap-3">
        <GrAnnounce className="transform invert" />
        {props.text}
        <GrAnnounce className="transform invert" />
      </p>
    </div>
  )
}

export default Announcement
