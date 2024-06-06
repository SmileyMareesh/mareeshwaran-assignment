import React from 'react';

function Footer(props) {
    return (
        <div className='Footer'>
            <section className="category">
                <ul className='footer-list' id="menu-footer-company" aria-label="Company">
                    <li><a href="javascript:;" >About Charter</a></li>
                    <li><a href="javascript:;" >Leadership</a></li>
                    <li><a href="javascript:;" >History</a></li>
                    <li><a href="javascript:;" >Diversity &amp; Inclusion</a></li>
                </ul>
            </section>
            <section class="category">
                <ul id="menu-footer-newsroom" aria-label="Newsroom">
                    <li><a href="javascript:;">Latest News</a></li>
                    <li><a href="javascript:;">Media Library</a></li>
                    <li><a href="javascript:;">Media Contacts</a></li>
                </ul>
            </section>
        </div>
    );
}

export default Footer;