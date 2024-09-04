import React from 'react' 
import TopHeader from './Header/TopHeader'
import BottomHeader from './Header/BottomHeader'
import CategorySlider from './Header/CategorySlider'
 
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
