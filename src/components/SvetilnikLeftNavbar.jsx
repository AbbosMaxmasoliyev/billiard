import React from 'react'
import linksSvetilnik from "../json/Links/keyLinks.json"


const SvetilnikLeftNavbar = () => {
    return (
        <div className="left">
            {
                Object.keys(linksSvetilnik).map((name, index) => (
                    <div>
                        <span className="h3">{name}</span>
                        {
                            linksSvetilnik[name].items.map((item) => (
                                <Link className="menu-section-level-3" to={`/svetilnik/${linksSvetilnik[name].link}/${item.link}`}><p>{item.name}</p></Link>
                            ))
                        }

                    </div>
                ))
            }


        </div>
    )
}

export default SvetilnikLeftNavbar