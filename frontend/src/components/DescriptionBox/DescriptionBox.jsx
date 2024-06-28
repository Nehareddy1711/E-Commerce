import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur hic dicta accusamus ipsum cum unde porro corrupti iusto, sed natus quidem ad culpa a, sint, voluptas id sapiente deleniti.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium et illo veritatis laboriosam distinctio non quas laborum eveniet cupiditate nam natus adipisci porro dolorem, ipsa blanditiis eum soluta reiciendis?</p>
            </div>
        </div>
    )
}
export default DescriptionBox