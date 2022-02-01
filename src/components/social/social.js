import React , {useState} from 'react'

export const Social = () => {
    const [social] = useState([
        {
            name:'facebook-f',
            link:'https://www.facebook.com/profile.php?id=100008333795144'
        },
        {
            name:'twitter',
            link:'https://twitter.com/khaledM25324847'
        },
        {
            name:'instagram',
            link:'https://www.instagram.com/khaled_mumo/'
        }, {
            name:'github',
            link:'https://github.com/khaliedmuhamad'
        }, {
            name:'linkedin-in',
            link:'https://www.linkedin.com/in/khaled-mohamed-0758781aa/'
        },{
            name:'kickstarter-k',
            link:'https://khalied.netlify.app/'
        }
    ]);
    return (
              <ul className='list-unstyled d-flex row justify-content-center'>                          
                        {social.map((el,n)=>
                        <a href={el.link} rel="noopener noreferrer"  target="_blank">
                            <li className='item-social mt-md-2 col-12' key={`${el.name}-${n}`} >
                                
                                    <i className={`fab fa-${el.name}`}></i>
                              
                            </li></a> 
                        )}
                        </ul>
    )
}
