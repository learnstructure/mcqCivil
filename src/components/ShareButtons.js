import React from 'react';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon, TelegramShareButton, TelegramIcon, WhatsappShareButton, WhatsappIcon, ViberShareButton, ViberIcon } from 'react-share';


const ShareButtons = ({ url, title }) => {
    const size = '2.5rem'
    return (
        <div className='share-button page-container'>

            <FacebookShareButton url={url} className='tooltip'>
                <FacebookIcon size={size} round={true} />
                <span className="tooltiptext">Facebook</span>
            </FacebookShareButton>

            <TwitterShareButton url={url} title={title} className='tooltip'>
                <TwitterIcon size={size} round={true} />
                <span className="tooltiptext">Twitter</span>
            </TwitterShareButton>

            <LinkedinShareButton url={url} title={title} className='tooltip'>
                <LinkedinIcon size={size} round={true} />
                <span className="tooltiptext">LinkedIn</span>
            </LinkedinShareButton>
            <TelegramShareButton url={url} title={title} className='tooltip'>
                <TelegramIcon size={size} round={true} />
                <span className="tooltiptext">Telegram</span>
            </TelegramShareButton>
            <ViberShareButton url={url} title='Viber' className='tooltip'>
                <ViberIcon size={size} round={true} />
                <span className="tooltiptext">Viber</span>
            </ViberShareButton>
            <WhatsappShareButton url={url} title={title} className='tooltip'>
                <WhatsappIcon size={size} round={true} />
                <span className="tooltiptext">Whatsapp</span>
            </WhatsappShareButton>
        </div>
    );
};

export default ShareButtons;
