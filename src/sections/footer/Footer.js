import React , {useState} from 'react';
import { Social } from '../../components/social/social.js'
import './Footer.scss';


export const Footer = () => {
    
    const [contact] = useState([
        {
            head:'CONTACT US',
            tel: 'Tel: +201019473809',
            email:'khalied.mo2030@gmail.com'
        },{
            head:'LOCATION',
            loc:'Egypt, Qalubia'
        }
    ])
const [links] = useState([
    {
        name:'Home',
        link:''
    },{
        name:'Our Results',
        link:''
    },{
        name:'Exterior',
        link:''
    },{
        name:'Interior',
        link:''
    },{
        name:'Contact Us',
        link:''
    },
]);

    return (
        <div className='footer' id='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-xs-6 '>
                        <div className='row brand-info'>
                            <div className='brand-logo'>
                            <a class="navbar-brand" href="#Home">
                                <svg width="120" height="50" viewBox="0 0 152 54" fill="#fff" xmlns="http://www.w3.org/54/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.2379 0.25C26.7426 0.25 26.2523 0.34733 25.8198 0.537485C24.6299 1.05824 24.1639 2.15686 24.6459 3.26822L24.7932 3.61277L25.0518 4.23933L25.0961 4.34404C25.3909 5.04392 25.505 5.42354 25.505 5.79565V5.99961C25.505 6.31876 25.2596 6.58383 24.9297 6.61483C22.9223 6.80514 20.9542 7.2909 19.0951 8.05554C18.8 8.17667 18.4692 8.0666 18.3145 7.7989L18.167 7.5433C18.0374 7.31863 17.9482 7.03832 17.8784 6.65176L17.8117 6.21193L17.6475 4.926C17.5102 3.72135 16.5571 3.00302 15.2638 3.1471C14.7945 3.19924 14.322 3.35996 13.8932 3.6076C13.4656 3.85414 13.0902 4.18275 12.8094 4.56362C12.0386 5.6128 12.1849 6.79693 13.1591 7.51729L13.4577 7.74185L14.2026 8.31307C14.7136 8.70555 14.9929 8.97729 15.1656 9.27614L15.2669 9.45055C15.4246 9.72425 15.3435 10.0785 15.072 10.2715C13.4402 11.43 11.9831 12.831 10.7474 14.4393C10.5531 14.6928 10.2105 14.7634 9.94354 14.6091L9.68464 14.4592C9.41689 14.3047 9.17231 14.0665 8.84449 13.6545L8.14983 12.7515C8.07888 12.6584 8.00299 12.5575 7.92507 12.4522C7.20466 11.478 6.02021 11.332 4.97214 12.1032C4.59139 12.3828 4.2624 12.7584 4.01525 13.1871C3.76769 13.6175 3.60697 14.0895 3.55499 14.5583C3.41819 15.7948 4.06898 16.7201 5.17911 16.9183L6.85745 17.1387C7.35254 17.2134 7.68975 17.3093 7.95076 17.4601L8.13144 17.5645C8.40767 17.7238 8.51434 18.0696 8.37575 18.3699C7.52614 20.2175 6.96498 22.1588 6.70083 24.1395C6.65796 24.4575 6.39759 24.6892 6.08795 24.6892H5.79565C5.46075 24.6892 5.11977 24.5967 4.54471 24.3633L4.03016 24.1479L3.7687 24.0422C3.6204 23.9812 3.4489 23.9092 3.26832 23.8309C2.15771 23.3479 1.0596 23.8135 0.537194 25.0046C0.347149 25.4379 0.25 25.9273 0.25 26.4229C0.25 26.9178 0.347199 27.4072 0.537223 27.8404C1.0596 29.0315 2.15771 29.497 3.26889 29.0138L3.76603 28.8038L4.23933 28.609L4.34404 28.5647C5.04392 28.2699 5.42354 28.1558 5.79565 28.1558H6.00042C6.31877 28.1558 6.58387 28.4013 6.61484 28.7304C6.80592 30.738 7.29144 32.7051 8.05538 34.5653C8.17704 34.8608 8.06692 35.1914 7.7989 35.3463L7.54322 35.4943C7.32069 35.6227 7.04209 35.7114 6.65768 35.7811L6.34375 35.831L5.21002 35.9796L4.926 36.0133C3.72125 36.1519 3.00412 37.1036 3.14702 38.3964C3.20035 38.8671 3.36092 39.3389 3.60731 39.7663C3.85583 40.1966 4.18392 40.5716 4.56467 40.8513C5.61216 41.622 6.79625 41.4761 7.51771 40.5022L7.84332 40.0709L8.30949 39.4626C8.70355 38.949 8.97601 38.6687 9.27614 38.4953L9.44778 38.3967C9.72571 38.2363 10.0785 38.3169 10.2712 38.5884C11.4306 40.2215 12.8319 41.6784 14.4405 42.9129C14.6933 43.1071 14.7636 43.4491 14.6091 43.7165L14.4587 43.9785C14.3056 44.2428 14.0673 44.4874 13.6575 44.8137L12.6067 45.6198C12.5566 45.6574 12.5049 45.6959 12.4522 45.7349C11.4783 46.4564 11.3328 47.6401 12.1028 48.6882C12.3834 49.0691 12.7587 49.3977 13.1874 49.6453C13.6169 49.8934 14.0899 50.054 14.5597 50.1052C15.795 50.2428 16.7201 49.5916 16.9183 48.4809L17.139 46.8031C17.2134 46.3089 17.3094 45.9716 17.4605 45.7107L17.5653 45.5294C17.7247 45.253 18.0701 45.1463 18.3706 45.2846C20.2152 46.1336 22.1562 46.6946 24.14 46.9599C24.4578 47.0025 24.69 47.2634 24.69 47.5729V47.8652C24.69 48.2001 24.5975 48.541 24.3641 49.1161L23.9129 50.2014C23.8862 50.2642 23.8588 50.3282 23.8309 50.3925C23.3478 51.5033 23.8137 52.6015 25.0057 53.1237C25.4379 53.3133 25.927 53.41 26.4221 53.41C26.9185 53.41 27.4076 53.3134 27.8404 53.1236C29.032 52.6015 29.4979 51.5033 29.0146 50.3919L28.8038 49.8944L28.609 49.4215L28.5647 49.3168C28.2699 48.6169 28.1558 48.2373 28.1558 47.8652V47.6604C28.1558 47.3421 28.402 47.0761 28.7312 47.0452C30.738 46.8549 32.7053 46.3693 34.5656 45.6045C34.8609 45.4834 35.1919 45.5937 35.3462 45.8608L35.4933 46.1166C35.6228 46.3408 35.7117 46.6198 35.7814 47.005L35.8392 47.3763L36.0143 48.7355C36.1514 49.9387 37.1038 50.657 38.397 50.5129C38.8637 50.4621 39.3361 50.3014 39.7664 50.0539C40.1967 49.8048 40.5717 49.476 40.8513 49.0953C41.6221 48.0478 41.4769 46.8645 40.503 46.1431L40.0715 45.8172L39.4623 45.3507C38.9496 44.9577 38.6689 44.6848 38.4955 44.3842L38.396 44.2117C38.2363 43.9355 38.3171 43.5818 38.5878 43.39C40.2215 42.2302 41.6784 40.8289 42.9129 39.2203C43.1071 38.9675 43.4495 38.8969 43.7171 39.0513L43.977 39.2013C44.2435 39.3553 44.4884 39.5938 44.8163 40.0057L45.6211 41.0546C45.6589 41.1048 45.6976 41.1565 45.7368 41.2093C46.4569 42.1826 47.6404 42.3281 48.6887 41.5568C49.0696 41.2762 49.399 40.9005 49.6456 40.4729C49.8929 40.0447 50.0536 39.5722 50.1058 39.1027C50.2436 37.8659 49.5925 36.9411 48.4817 36.7419L46.7973 36.5207C46.3069 36.4462 45.9704 36.3501 45.7097 36.1997L45.5314 36.0962C45.2532 35.9359 45.1463 35.5903 45.2844 35.2906C46.1334 33.4461 46.6945 31.5044 46.9599 29.5208C47.0024 29.2029 47.2635 28.9708 47.5729 28.9708H47.866C48.2003 28.9708 48.5411 29.0633 49.1161 29.2967L49.6306 29.5121L50.0471 29.6827C50.1553 29.7281 50.2719 29.7776 50.3925 29.8299C51.5037 30.3119 52.6014 29.8462 53.1236 28.6554C53.3134 28.2228 53.41 27.7336 53.41 27.2379C53.41 26.7418 53.3132 26.2518 53.1233 25.8198C52.6016 24.6292 51.504 24.1639 50.3926 24.6459L50.2153 24.7221L49.3168 25.0961C48.6169 25.3909 48.2374 25.505 47.866 25.505H47.6612C47.3423 25.505 47.0765 25.2589 47.0451 24.9288C46.856 22.925 46.3704 20.9575 45.6054 19.0947C45.4842 18.7993 45.5941 18.4689 45.8612 18.3148L46.119 18.1653C46.3406 18.0376 46.6196 17.9488 47.0039 17.8792L47.4446 17.8123L48.7355 17.6465C49.9387 17.5096 50.6568 16.5571 50.5138 15.2643C50.4616 14.7936 50.3007 14.3208 50.0528 13.8926C49.8056 13.4645 49.4771 13.0893 49.0969 12.8092C48.0472 12.0389 46.8656 12.1842 46.1435 13.1573L45.8173 13.5893L45.3471 14.2028C44.9557 14.713 44.6835 14.9926 44.3842 15.1653L44.2112 15.2656C43.9362 15.424 43.5816 15.3431 43.3897 15.0726C42.2317 13.4406 40.8309 11.984 39.2215 10.7474C38.9675 10.5526 38.8969 10.2105 39.0513 9.94288L39.2007 9.68615C39.3557 9.41691 39.5943 9.17169 40.0052 8.84481L40.553 8.42616L40.9092 8.14985C41.0024 8.07888 41.1033 8.00299 41.2086 7.92507C42.1828 7.20336 42.3288 6.01909 41.5574 4.97183C41.278 4.59151 40.9027 4.26266 40.4734 4.01473C40.0432 3.76666 39.5704 3.60584 39.1009 3.55481C37.8667 3.41719 36.9412 4.0682 36.742 5.17833L36.5302 6.80108L36.5216 6.8587C36.4468 7.35262 36.3507 7.69015 36.2001 7.95176L36.097 8.12938C35.9369 8.40737 35.5909 8.51423 35.2896 8.37591C33.4447 7.52676 31.5035 6.96523 29.5216 6.70007C29.2026 6.65749 28.9708 6.39709 28.9708 6.08795V5.79565C28.9708 5.46075 29.0633 5.11977 29.2967 4.54471L29.5121 4.03016L29.6827 3.61368C29.7281 3.50546 29.7776 3.38891 29.8299 3.26832C30.3129 2.15756 29.8464 1.05841 28.6548 0.536955C28.2234 0.347235 27.7338 0.25 27.2379 0.25ZM27.2379 1.75C27.5312 1.75 27.8153 1.80642 28.0522 1.9106C28.5036 2.10814 28.6 2.3352 28.4541 2.67074L28.3347 2.94989L27.9974 3.76173C27.6277 4.6394 27.4708 5.16118 27.4708 5.79565V6.08795C27.4708 7.15416 28.2642 8.04553 29.3229 8.18685C31.1568 8.4322 32.9535 8.95197 34.6631 9.73882C35.6638 10.1982 36.8468 9.83289 37.3956 8.88022L37.4988 8.70243C37.7294 8.30177 37.867 7.86974 37.965 7.32436L38.0232 6.95781L38.2096 5.50267C38.2514 5.13977 38.4483 4.99134 38.9368 5.0458C39.1948 5.07386 39.4692 5.16716 39.7237 5.31393C39.9774 5.46047 40.1955 5.65151 40.3491 5.86063C40.6409 6.25685 40.6108 6.50113 40.316 6.71954L39.2552 7.52757C38.5967 8.03217 38.2 8.41802 37.9025 8.93466L37.7533 9.19096C37.2194 10.1169 37.4609 11.2873 38.308 11.9372C39.7982 13.0821 41.0948 14.4304 42.1663 15.9406C42.8026 16.8373 44.0095 17.1129 44.9616 16.5644L45.1351 16.4639C45.5918 16.2003 45.947 15.8583 46.3735 15.3251L46.5781 15.0623L46.9854 14.5305C47.1051 14.3754 47.2283 14.2129 47.3486 14.0504C47.5671 13.7559 47.8108 13.726 48.2084 14.0177C48.4163 14.1709 48.6075 14.3893 48.7543 14.6434C48.9009 14.8967 48.9942 15.1711 49.0229 15.4294C49.077 15.9183 48.9288 16.1148 48.5649 16.1562L46.9803 16.3629C46.3209 16.4628 45.8225 16.6049 45.3682 16.8668L45.1103 17.0163C44.1896 17.5472 43.8131 18.6787 44.2178 19.6644C44.9266 21.3904 45.3766 23.2133 45.5518 25.0704C45.656 26.1651 46.563 27.005 47.6612 27.005H47.866C48.4365 27.005 48.9159 26.878 49.646 26.583L50.4356 26.2558C50.6164 26.1814 50.8041 26.1024 50.9895 26.022C51.326 25.8761 51.5523 25.972 51.7498 26.4227C51.8538 26.6592 51.91 26.9438 51.91 27.2379C51.91 27.5318 51.8539 27.8159 51.7499 28.0528C51.5523 28.5034 51.3256 28.5996 50.9894 28.4538L50.7108 28.3347L49.8991 27.9975C49.0213 27.6277 48.4999 27.4708 47.866 27.4708H47.5729C46.5068 27.4708 45.6146 28.264 45.4732 29.322C45.2276 31.1577 44.7081 32.9551 43.922 34.6631C43.4615 35.6622 43.8276 36.8458 44.7806 37.3948L44.9584 37.498C45.3576 37.7284 45.7892 37.8662 46.3324 37.964L46.7643 38.0314L47.317 38.1014L47.6947 38.1533L48.1572 38.2096C48.5214 38.2515 48.6695 38.4478 48.615 38.9368C48.5863 39.1948 48.4929 39.4695 48.3464 39.7232C48.2007 39.9759 48.0091 40.1944 47.7994 40.3489C47.4031 40.6404 47.1597 40.6105 46.9415 40.3156L46.5974 39.8609L46.1335 39.2554C45.6278 38.5963 45.2429 38.2003 44.7271 37.9023L44.4667 37.752C43.5434 37.2196 42.3732 37.4607 41.7232 38.3068C40.5798 39.7966 39.2314 41.0935 37.7201 42.1665C36.8226 42.8024 36.5468 44.0101 37.097 44.9618L37.1962 45.1338C37.4612 45.5931 37.8043 45.9491 38.3398 46.3771L39.1303 46.9854C39.2854 47.1051 39.4479 47.2283 39.6104 47.3486C39.9047 47.5666 39.9346 47.8103 39.6428 48.2068C39.4889 48.4163 39.2707 48.6076 39.0167 48.7547C38.7628 48.9007 38.4882 48.9941 38.2328 49.0219C37.783 49.072 37.5807 48.9519 37.5182 48.6513L37.3075 47.0465L37.2979 46.982C37.1977 46.3206 37.0557 45.8225 36.7928 45.3676L36.6459 45.1119C36.1131 44.1893 34.9819 43.8126 33.9959 44.2169C32.272 44.9256 30.4492 45.3756 28.5901 45.5518C27.4964 45.6547 26.6558 46.5624 26.6558 47.6604V47.8652C26.6558 48.4362 26.7829 48.9159 27.0778 49.646L27.4046 50.4352C27.479 50.6165 27.5583 50.8047 27.6393 50.9906C27.7851 51.3259 27.6891 51.5522 27.2381 51.7498C27.0008 51.8539 26.7167 51.91 26.4221 51.91C26.1289 51.91 25.8448 51.8539 25.608 51.7499C25.1567 51.5522 25.0607 51.3259 25.2067 50.9901L25.3751 50.5942L25.6634 49.8991C26.0331 49.0214 26.19 48.4996 26.19 47.8652V47.5729C26.19 46.5065 25.3965 45.6147 24.3389 45.4732C22.5028 45.2276 20.7063 44.7084 18.9977 43.922C17.998 43.4618 16.8154 43.8273 16.2662 44.7794L16.1621 44.9596C15.9311 45.3585 15.7932 45.7913 15.6953 46.3382L15.6287 46.7682L15.5593 47.3172L15.4814 47.8983L15.4505 48.156C15.4089 48.5207 15.2128 48.6686 14.724 48.6142C14.4655 48.586 14.1914 48.4929 13.9376 48.3464C13.6835 48.1996 13.4651 48.0084 13.3111 47.7994C13.0202 47.4034 13.0503 47.1587 13.3448 46.9405L14.4089 46.1301C15.0644 45.6271 15.4603 45.2421 15.7581 44.7278L15.9089 44.4652C16.4412 43.5441 16.2004 42.3735 15.354 41.7232C13.8642 40.5798 12.5673 39.2314 11.4943 37.7201C10.8571 36.8225 9.65155 36.547 8.69937 37.0968L8.52753 37.1954C8.0675 37.4612 7.71223 37.8036 7.28383 38.3393L6.6749 39.13C6.55546 39.2848 6.43242 39.4472 6.31218 39.6096C6.09395 39.9042 5.84943 39.9343 5.45316 39.6428C5.24428 39.4893 5.05382 39.2716 4.90652 39.0166C4.76076 38.7638 4.66704 38.4884 4.63772 38.2296C4.58382 37.7419 4.73182 37.5455 5.09599 37.5036L5.55927 37.4473L6.68147 37.2975C7.34135 37.1973 7.83909 37.0554 8.29368 36.7931L8.54981 36.6449C9.47169 36.112 9.84854 34.9804 9.44265 33.9948C8.73514 32.272 8.28519 30.449 8.10816 28.589C8.00527 27.4956 7.09836 26.6558 6.00042 26.6558H5.79565C5.22463 26.6558 4.74488 26.7829 4.01482 27.0778L3.22605 27.4043C3.04496 27.4785 2.85697 27.5574 2.67131 27.638C2.33489 27.7843 2.10844 27.6883 1.91089 27.2378C1.80646 26.9998 1.75 26.7155 1.75 26.4229C1.75 26.1295 1.80643 25.8452 1.91086 25.6072C2.10844 25.1567 2.33489 25.0607 2.67074 25.2067L2.95032 25.3261L3.76173 25.6625C4.6394 26.0323 5.16118 26.1892 5.79565 26.1892H6.08795C7.15419 26.1892 8.04491 25.3967 8.18753 24.3389C8.43208 22.5051 8.9515 20.7082 9.73813 18.9975C10.1991 17.9987 9.83386 16.8148 8.88139 16.2654L8.70118 16.1613C8.30202 15.9307 7.86985 15.7931 7.32296 15.6952L7.01735 15.6459L5.74891 15.4797L5.50384 15.4505C5.13989 15.409 4.99177 15.2124 5.04587 14.7234C5.07436 14.4664 5.16804 14.1913 5.31512 13.9356C5.46065 13.6832 5.65156 13.4653 5.86063 13.3117C6.25729 13.0199 6.5015 13.05 6.71916 13.3443L7.52713 14.4045C8.03299 15.0642 8.41757 15.4599 8.93403 15.7579L9.19246 15.9075C10.1161 16.4413 11.2878 16.1996 11.9373 15.3527C13.0813 13.8637 14.4301 12.5668 15.9408 11.4943C16.8375 10.8568 17.1136 9.65109 16.5652 8.6992L16.4633 8.52397C16.2002 8.06855 15.8589 7.71437 15.3255 7.28734L14.5311 6.67504C14.3764 6.5556 14.2143 6.43246 14.052 6.31201C13.7566 6.09353 13.7264 5.84904 14.0175 5.45274C14.1715 5.24386 14.3899 5.0527 14.6429 4.9068C14.8972 4.75997 15.1718 4.66654 15.4296 4.6379C15.9189 4.58338 16.1156 4.73161 16.1571 5.0952L16.2135 5.55914L16.3618 6.67338C16.4619 7.3363 16.6043 7.8363 16.8677 8.29287L17.0154 8.54893C17.5485 9.47131 18.6797 9.84761 19.6652 9.44296C21.3876 8.73456 23.2111 8.28449 25.0707 8.10819C26.1651 8.00532 27.005 7.09839 27.005 5.99961V5.79565C27.005 5.22463 26.8779 4.74488 26.583 4.01482L26.2562 3.22563C26.1818 3.04431 26.1025 2.8561 26.0215 2.67018C25.8762 2.33513 25.9725 2.108 26.4224 1.91113C26.6603 1.80654 26.9451 1.75 27.2379 1.75ZM20.53 13.48C17.6804 13.48 15.37 15.7901 15.37 18.64C15.37 21.4894 17.6806 23.8 20.53 23.8C23.3794 23.8 25.69 21.4894 25.69 18.64C25.69 15.7901 23.3796 13.48 20.53 13.48ZM20.53 14.98C22.5512 14.98 24.19 16.6186 24.19 18.64C24.19 20.6609 22.5509 22.3 20.53 22.3C18.5091 22.3 16.87 20.6609 16.87 18.64C16.87 16.6186 18.5088 14.98 20.53 14.98ZM34.0754 33.01C32.0955 33.01 30.49 34.6151 30.49 36.595C30.49 38.5749 32.0955 40.18 34.0754 40.18C36.0552 40.18 37.66 38.575 37.66 36.595C37.66 34.615 36.0552 33.01 34.0754 33.01ZM34.0754 34.51C35.2267 34.51 36.16 35.4434 36.16 36.595C36.16 37.7466 35.2267 38.68 34.0754 38.68C32.9238 38.68 31.99 37.7464 31.99 36.595C31.99 35.4436 32.9238 34.51 34.0754 34.51ZM12.85 30.295C12.85 28.315 14.455 26.71 16.435 26.71C18.415 26.71 20.02 28.315 20.02 30.295C20.02 32.275 18.415 33.88 16.435 33.88C14.455 33.88 12.85 32.275 12.85 30.295ZM18.52 30.295C18.52 29.1434 17.5866 28.21 16.435 28.21C15.2834 28.21 14.35 29.1434 14.35 30.295C14.35 31.4466 15.2834 32.38 16.435 32.38C17.5866 32.38 18.52 31.4466 18.52 30.295ZM27.7746 26.71C25.7948 26.71 24.19 28.315 24.19 30.295C24.19 32.275 25.7948 33.88 27.7746 33.88C29.7545 33.88 31.36 32.2749 31.36 30.295C31.36 28.3151 29.7545 26.71 27.7746 26.71ZM27.7746 28.21C28.9262 28.21 29.86 29.1436 29.86 30.295C29.86 31.4464 28.9262 32.38 27.7746 32.38C26.6233 32.38 25.69 31.4466 25.69 30.295C25.69 29.1434 26.6233 28.21 27.7746 28.21ZM36.16 28.405C36.16 26.7733 37.4829 25.45 39.115 25.45C40.7471 25.45 42.07 26.7733 42.07 28.405C42.07 30.0367 40.7471 31.36 39.115 31.36C37.4829 31.36 36.16 30.0367 36.16 28.405ZM40.57 28.405C40.57 27.6016 39.9185 26.95 39.115 26.95C38.3115 26.95 37.66 27.6016 37.66 28.405C37.66 29.2084 38.3115 29.86 39.115 29.86C39.9185 29.86 40.57 29.2084 40.57 28.405ZM26.515 38.05C25.2309 38.05 24.19 39.0905 24.19 40.3746C24.19 41.6588 25.231 42.7 26.515 42.7C27.799 42.7 28.84 41.6588 28.84 40.3746C28.84 39.0905 27.7991 38.05 26.515 38.05ZM26.515 39.55C26.9708 39.55 27.34 39.919 27.34 40.3746C27.34 40.8304 26.9705 41.2 26.515 41.2C26.0595 41.2 25.69 40.8304 25.69 40.3746C25.69 39.919 26.0592 39.55 26.515 39.55ZM31.12 19.5846C31.12 18.3004 32.1604 17.26 33.4446 17.26C34.7289 17.26 35.77 18.3004 35.77 19.5846C35.77 20.8688 34.7288 21.91 33.4446 21.91C32.1604 21.91 31.12 20.8689 31.12 19.5846ZM34.27 19.5846C34.27 19.1291 33.9007 18.76 33.4446 18.76C32.9888 18.76 32.62 19.1288 32.62 19.5846C32.62 20.0407 32.9891 20.41 33.4446 20.41C33.9004 20.41 34.27 20.0404 34.27 19.5846Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M74.11 35.18C77.17 35.18 79.366 33.614 79.744 30.518H77.404C77.152 32.336 75.892 33.236 74.11 33.236C71.734 33.236 70.348 31.526 70.348 28.628V28.484C70.348 25.604 71.824 23.84 74.092 23.84C75.946 23.84 76.9 24.722 77.17 26.432H79.6C79.312 23.408 77.026 21.932 74.074 21.932C70.492 21.932 67.828 24.632 67.828 28.502V28.646C67.828 32.606 70.078 35.18 74.11 35.18ZM87.9391 35.18C91.8451 35.18 94.4191 32.354 94.4191 28.592V28.448C94.4191 24.668 91.7731 21.95 87.9391 21.95C84.1231 21.95 81.4231 24.74 81.4231 28.502V28.646C81.4231 32.354 83.9971 35.18 87.9391 35.18ZM83.9251 28.628C83.9251 31.436 85.6351 33.254 87.9751 33.254C90.4051 33.254 91.9351 31.4 91.9351 28.61V28.466C91.9351 25.82 90.4591 23.858 87.9391 23.858C85.4191 23.858 83.9251 25.712 83.9251 28.484V28.628ZM102.488 35L106.844 22.13H104.594L101.228 32.57L97.8803 22.13H95.3783L99.7163 35H102.488ZM111.475 22.13V35H109.063V22.13H111.475ZM118.645 35C123.163 35 125.341 32.336 125.341 28.592V28.43C125.341 24.686 123.163 22.13 118.681 22.13H114.775V35H118.645ZM117.169 33.11H118.573C121.453 33.11 122.839 31.454 122.839 28.61V28.466C122.839 25.694 121.579 24.02 118.555 24.02H117.169V33.11ZM132.33 30.05V28.196H127.506V30.05H132.33ZM139.121 22.13V35H136.709V24.506L133.991 26.36V24.254L136.979 22.13H139.121ZM146.56 35.162C149.872 35.162 151.744 32.804 151.744 28.574V27.908C151.744 24.2 150.088 21.932 146.722 21.932C143.788 21.932 141.952 23.714 141.952 26.342C141.952 28.88 143.734 30.518 146.218 30.518C147.748 30.518 148.792 29.87 149.386 28.898C149.35 31.832 148.36 33.308 146.524 33.308C145.138 33.308 144.544 32.66 144.31 31.652H142.06C142.366 33.866 143.932 35.162 146.56 35.162ZM144.31 26.27C144.31 27.818 145.246 28.844 146.722 28.844C148.18 28.844 149.206 27.872 149.206 26.45C149.206 24.722 148.18 23.714 146.704 23.714C145.264 23.714 144.31 24.74 144.31 26.27Z" fill="white"/>
                                </svg>
                            </a>
                            </div>                           
                        </div>
                        <div className='row brand-about'>
                            <p>KOTAM an online marketplace built to cope with promising future</p>
                        </div>
                    </div>

                    <div className='col-md-3 col-6 mt-4'>
                        <div className='links' >
                            <h3 className='head'>USEFUL LINKS</h3>
                            {links.map((el,n) => 
                              
                                <a className='links-item' key={n}  href={`#${el.link}`}>
                                <h4 className='head-link'>{el.name}</h4>
                                </a>
                               
                            )}
                        </div>
                    </div>
                    <div className='col-md-4 col-6 mt-4'>
                        <div className='contact'>
                            <h4 className='contact-head'>{contact[0].head}</h4>
                            <p className='contact-info'>{contact[0].tel}</p>

                            <p className='contact-info email'>
                            <a className='unstyled' href = {`mailto: ${contact[0].email}`}>Send Email</a>       
                                </p>
                        </div>
                        <div className='contact mt-4'>
                            <h4 className='contact-head'>{contact[1].head}</h4>
                            <p className='contact-info'>{contact[1].loc}</p>
                        </div>
                    </div>
                    <div className='col-md-2 col-12 social text-center'>
                        <h4 className='social-head'>Keep in Touch</h4>  
                      <Social />
                    </div>

                </div> 
                <hr />
                <div className='copy text-center'>
                © KOTAM, All Rights Reserved
                    </div>            
            </div>
        </div>
    )
}
