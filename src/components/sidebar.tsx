import { DocumentText, Edit, Setting2, Star1 } from 'iconsax-react'
import { Link, useLocation } from 'react-router'

const SidebarComponent = () => {
  const location = useLocation()
  return (
    <div className={`min-w-[75px] h-dvh space-y-[62px] py-6 border-r border-border`}>
      {/* <div className={`p-2 cursor-pointer hover:opacity-80`}>
        <Message color={`#000`} size={`1.5rem`} className={`mx-auto`} />
      </div> */}
      <div>
        <Link to={`/`}>
          <div className={`p-2 cursor-pointer hover:opacity-80`}>
            <DocumentText color={location.pathname === `/` ? `#000` : `#A1A1A1`} size={`1.5rem`} className={`mx-auto`} />
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/review`}>
          <div className={`p-2 cursor-pointer hover:opacity-80`}>
              <Star1 color={location.pathname === `/review` ? `#000` : `#A1A1A1`} size={`1.5rem`} className={`mx-auto`} />
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/setting`}>
          <div className={`p-2 cursor-pointer hover:opacity-80`}>
            <Setting2 color={location.pathname === `/setting` ? `#000` : `#A1A1A1`} size={`1.5rem`} className={`mx-auto`} />
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/blog`}>
          <div className={`p-2 cursor-pointer hover:opacity-80`}>
            <Edit color={location.pathname === `/blog` ? `#000` : `#A1A1A1`} size={`1.5rem`} className={`mx-auto`} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SidebarComponent