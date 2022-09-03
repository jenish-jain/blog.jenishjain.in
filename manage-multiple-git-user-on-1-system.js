/** @jsxRuntime classic */
/** @jsx mdx */
/** @jsxFrag mdx.Fragment */
import { mdx } from '/web_modules/@mdx-js/preact.js';
export const meta = {
    date: '2022-09-02',
    title: 'How to manage multiple git users on a single system',
    seo_title: 'How to manage multiple git users on a single system',
    slug: 'manage-multiple-git-user-on-1-system',
    description: 'An easy way to contribute with multiple github profiles using a single system',
    category: 'productivity',
    tags: [
        'git',
        'productivity',
        'blog',
        'website'
    ],
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/12830a141409355.6255198842c0f.gif',
    cta: 'productivity',
    site: 'blogsite',
    thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/52a130141409355.62566a5b6114b.jpg'
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, "Having problems managaing your multiple personalities?\nwell this can be resolved for git :p using these simple steps."), mdx("h2", {
        id: "problem"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#problem",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Problem"), mdx("p", null, "Well most of us have atleast two github profiles one for work and another personal and contributing to both of them with sepereate accounts could be a pain. while one can always remember and switch the profiles, but we can do a better job here using some configurations :)"), mdx("h2", {
        id: "solution"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#solution",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Solution"), mdx("p", null, "Assuming you have a usual setup of a workspace and a personalspace which you use to organise your work and personal projects and the structure looks something like this."), mdx("p", null, mdx("img", {
        src: "https://res.cloudinary.com/jenishjain/image/upload/v1662190325/portfolio/blog-assets/folder-structure.png",
        alt: "folder structure",
        parentName: "p"
    })), mdx("blockquote", null, mdx("p", {
        parentName: "blockquote"
    }, "We can take advantage of gitconfigs here to instruct git to use a particular set on credentials in a given case.")), mdx("p", null, "We have a ", mdx("inlineCode", {
        parentName: "p"
    }, ".gitconfig"), " file at the root level which maintains your global git config. what we are gonna do is store individual git config in your pesonal and work folders and tell .gitconfig to replace the user and credentials according to my space i am working in."), mdx("h3", {
        id: "create-space-specific-config-files"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#create-space-specific-config-files",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "create space specific config files"), mdx("p", null, "we will have to create .config files in each folder something like this"), mdx("p", null, mdx("img", {
        src: "https://res.cloudinary.com/jenishjain/image/upload/v1662191687/portfolio/blog-assets/git-config.png",
        alt: "git-config",
        parentName: "p"
    })), mdx("p", null, "after creating both the config files your folders should looks like this"), mdx("p", null, mdx("img", {
        src: "https://res.cloudinary.com/jenishjain/image/upload/v1662192358/portfolio/blog-assets/folder-with-gitconf.png",
        alt: "folders-with-gitconfig",
        parentName: "p"
    })), mdx("h3", {
        id: "configuring-your-global-git-config"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#configuring-your-global-git-config",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "configuring your global git config"), mdx("p", null, "now in your global ", mdx("inlineCode", {
        parentName: "p"
    }, "~/.gitconfig"), " file we need to replace the [user] block with the one shown below ( for me both workspace and personal space were present on desktop)"), mdx("p", null, mdx("img", {
        src: "https://res.cloudinary.com/jenishjain/image/upload/v1662192762/portfolio/blog-assets/global-git-config.png",
        alt: "global git config",
        parentName: "p"
    })), mdx("h2", {
        id: "thats-all-"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#thats-all-",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Thats All 🎉"), mdx("p", null, "now you can simply navigate to your desired space and work without worrying about commiting with correct git profile."), mdx("h2", {
        id: "test-if-this-is-working-"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#test-if-this-is-working-",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Test if this is working 👀"), mdx("p", null, "we can test this by simply creating a test project and initialising git in it. on checking the local config you should see the appropirate username and email configured."), mdx("p", null, mdx("img", {
        src: "https://res.cloudinary.com/jenishjain/image/upload/v1662193809/portfolio/blog-assets/personalpace-test.png",
        alt: "personalspace-test",
        parentName: "p"
    })), mdx("p", null, mdx("img", {
        src: "https://res.cloudinary.com/jenishjain/image/upload/v1662193809/portfolio/blog-assets/workspace-test.png",
        alt: "workspace-test",
        parentName: "p"
    })));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
