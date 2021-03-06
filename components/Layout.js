import React, {Component} from 'react';
import Head from 'next/head';

const Layout = () => {
    return (
        <div>
            <Head>
                <title>Footer sticky</title>
            </Head>
            <div className="main">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit earum deleniti vero dignissimos, ratione suscipit, ipsam accusamus ut vitae reiciendis quis nostrum magnam? Ullam quos mollitia ipsam voluptatem, maxime earum.</p>
                <p>Perferendis sint culpa quasi, enim vitae fugiat libero possimus harum dolore ab qui odio rerum fugit obcaecati cumque recusandae ad officia veritatis est quo praesentium adipisci ipsam molestias. Molestias, provident!</p>
                <p>Atque fugit, reprehenderit iure sit aperiam quibusdam fuga nulla officiis ratione quia inventore animi et cupiditate pariatur eum. Necessitatibus, recusandae ipsum voluptatem dignissimos sint explicabo molestias vero corporis consectetur quod!</p>
                <p>Blanditiis ipsum sed expedita cum, facilis perspiciatis aut eum cumque eligendi iure architecto labore. Quis repudiandae repellendus vero cumque aspernatur temporibus. Quae ducimus delectus aspernatur saepe optio suscipit deleniti nulla.</p>
                <p>Culpa fugiat ratione pariatur consequatur distinctio nam nostrum? Porro libero quidem temporibus? Praesentium quidem quis magni officiis animi sunt corporis molestias dolores! Amet iure omnis vero labore rerum, quas nemo?</p>
                <p>Molestias voluptatem dicta sit a id, eaque architecto ea atque earum repellat ratione, itaque autem obcaecati quae in. Amet, error ab sapiente impedit in doloribus ad eligendi omnis eaque optio.</p>
                <p>Veritatis totam dicta at fuga? Mollitia sunt officia eveniet eos, similique voluptatem enim aliquid obcaecati rem recusandae reprehenderit nam ab neque, fugit reiciendis ipsa facilis expedita nemo at id. Facilis?</p>
                <p>Esse quaerat cumque ipsa ducimus ab, dolores tempore nisi quo fugiat, numquam dolorem minus? Similique asperiores, doloremque beatae voluptatem rerum consectetur reprehenderit mollitia, corporis adipisci officia esse nam maiores quae.</p>
                <p>Similique commodi tempore dolorem dolorum fuga aliquid et architecto quae quas! At animi molestias ratione enim voluptatibus laudantium distinctio deserunt excepturi repudiandae incidunt aut quos, repellat magni corporis modi ipsam.</p>
                <p>Velit praesentium deleniti tenetur deserunt enim, alias sint explicabo, dolores vitae, repellat tempore commodi voluptate? Neque mollitia vero debitis autem molestias, veniam minima quo accusantium. Commodi fugit aliquid rem quae?</p>
                <p>Sequi aspernatur in debitis repellendus cupiditate vel quas similique ullam adipisci possimus! Enim ullam, incidunt adipisci fuga, harum tempora non unde voluptates possimus consequatur dolore voluptatibus beatae nobis. Expedita, enim.</p>
                <p>Reiciendis consequatur voluptatem aspernatur nostrum magni sint veniam et temporibus eos aperiam? Neque rerum cumque maiores ex corporis illo, saepe officiis aut quaerat quos deserunt nostrum, consequatur dolorem, incidunt quisquam.</p>
                <p>Molestiae dolorum dolores praesentium minus sunt temporibus placeat quibusdam, dolore voluptate a quod veritatis explicabo vel nobis suscipit perferendis harum maiores hic consectetur voluptas autem earum fugit ea accusantium? At!</p>
                <p>Commodi exercitationem eos maxime et officiis tempora dolorem error veniam. Voluptatum tempore nobis id totam, vero maiores veritatis reprehenderit nulla voluptates! Earum rerum, iure at sequi quidem labore rem est.</p>
                <p>Ab incidunt aspernatur corporis perspiciatis quam fugiat assumenda tenetur, qui, dolorum aut magnam, ex asperiores? Placeat corrupti consectetur quas magni beatae rerum! Adipisci fuga facere nesciunt expedita totam unde id!</p>
                <p>Neque, sapiente! Culpa similique consequuntur atque molestiae itaque! Sed doloribus necessitatibus incidunt obcaecati blanditiis velit quasi nihil consequuntur iusto, quis, harum dolorum eveniet explicabo minima a adipisci hic fugiat corrupti?</p>
                <p>Iste assumenda voluptatum quasi voluptates enim ullam est aliquam perferendis. Provident voluptatem, possimus aspernatur consectetur unde blanditiis qui neque quisquam similique nulla dignissimos facilis. Quidem, eveniet! Vero optio quaerat est?</p>
                <p>Sequi suscipit dicta quisquam, enim odio nobis est ad adipisci, ipsum voluptates magni architecto assumenda optio aperiam harum rerum libero! Dolorum, repellat reiciendis enim tenetur doloremque at ullam odit sunt.</p>
                <p>Blanditiis necessitatibus, inventore iusto minus ad error ex mollitia sed exercitationem tempora esse quos corporis quod. Maxime blanditiis ipsum saepe culpa veritatis tempore laboriosam laudantium impedit qui? Iure, quia quaerat?</p>
                <p>Repellat, modi similique iste natus corporis veritatis id, dignissimos dolores excepturi culpa quam nulla dicta delectus quidem? Quo reiciendis repellendus adipisci necessitatibus quae id eveniet cum blanditiis deserunt beatae? Aliquid.</p>
            </div>
            <footer className="footer">
                <span>Hola babe</span>
                <span>hey hey hey </span>
            </footer>
            <style jsx>{`
                .main {
                    /* make sure to cover the screen */
                    min-height: 100vh;

                    /* need a solid bg to hide the footer */
                    background: white;

                /* put on top */
                    position: relative;
                    z-index: 1;

                    font: 16px/1.4 system-ui, sans-serif;
                    padding: 2rem;
                }
                .footer {
                    /* place on the bottom */
                    position: sticky;
                    bottom: 0;
                    left: 0;
                    width: 100%;

                    background: #252a47;
                    display: grid;
                    place-items: center;
                    padding: 50px;
                }
                .footer span {
                    max-width: 600px;
                    margin: 0 auto 1rem;
                }
                
            `}</style>
            <style global jsx>{`
                * {
                    box-sizing: border-box;
                }
                body {
                    margin: 0;
                }
                p {
                    max-width: 600px;
                    margin: 0 auto 1rem;
                }
            `}</style>
        </div>
    )
}

export default Layout