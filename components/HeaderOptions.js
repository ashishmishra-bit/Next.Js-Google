import HeaderOption from "./HeaderOption";
import { 
    DotsVerticalIcon, 
    NewspaperIcon, 
    MapIcon, 
    PhotographIcon,
    PlayIcon,
    SearchIcon
} from "@heroicons/react/outline";

function HeaderOptions() {
    return (
        <div>

            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon} 
                title="All" selected/>
                <HeaderOption Icon={PhotographIcon} 
                title="Images" />
                <HeaderOption Icon={PlayIcon} 
                title="Videos" />
                <HeaderOption Icon={NewspaperIcon} 
                title="News" />
                <HeaderOption Icon={MapIcon} 
                title="Map" />
                <HeaderOption Icon={DotsVerticalIcon} 
                title="More" />
                
            </div>
            
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions;
