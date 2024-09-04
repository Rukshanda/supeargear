import React from 'react' 
import TopHeader from './TopBar/TopHeader'
import BottomHeader from './TopBar/BottomHeader'
import CategorySlider from './TopBar/CategorySlider'
 
function Header() {
    return (
        <div>
           <TopHeader/>
           <BottomHeader/>
        <CategorySlider/>
        </div>
    )
}

export default Header
