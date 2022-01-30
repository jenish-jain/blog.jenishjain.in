import { SEO } from '../../components/seo.js';
import { Layout } from '../../components/layout';
import Block from '../../components/block';
import Intro from '../../components/intro';
import PostPreviews from '../../components/post-previews';
const Posts = function({ posts =[]  }) {
    return [
        h(SEO, {
            title: `${posts.length} posts about how Jason Lengstorf stopped being such a dingus`,
            description: "Jason writes about building strong teams, healthier working lives, effective habits, & more. Learn actionable strategies written from real experience."
        }),
        h(Layout, null, h(Block, {
            color: "yellow"
        }, h(Intro, {
            headline: `I’ve written ${posts.length} posts about how I stopped being such a dingus.`,
            post: true
        }, h("p", null, "I write about building strong teams, healthier working lives, effective habits, and more. In these posts, I share actionable strategies written from real experience."))), h(Block, {
            color: "white"
        }, h("section", {
            id: "previews"
        }, h(PostPreviews, {
            posts: posts
        })))), 
    ];
};
export default Posts;
