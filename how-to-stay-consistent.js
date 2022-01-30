/** @jsxRuntime classic */
/** @jsx mdx */
/** @jsxFrag mdx.Fragment */
import { mdx } from '/web_modules/@mdx-js/preact.js';
export const meta = {
    date: '2015-11-19',
    title: 'Why Can’t I Stay Consistent?',
    seo_title: 'Why can’t I stay consistent? How to keep a good thing going.',
    slug: 'how-to-stay-consistent',
    description: 'How can we make sure the things we care about most still get done, even when things get busy? Willpower isn’t enough; we need a routine to keep us on track.',
    category: 'remote-productivity',
    tags: [
        'motivation',
        'planning',
        'productivity',
        'success'
    ],
    image: 'https://picsum.photos/id/244/4000/2500',
    cta: 'work-happy',
    site: 'blogsite',
    thumb: 'https://picsum.photos/id/244/4000/2500'
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, "I've had trouble writing over the last few months. It's not writer's block, though; I haven't even been ", mdx("em", {
        parentName: "p"
    }, "trying"), " to write."), mdx("p", null, "It's been bumming me out, because writing makes me happy."), mdx("p", null, "I realized recently that I hadn't written anything in weeks. I knew I was screwing up. I was ignoring my own advice: I needed to ", mdx("a", {
        href: "https://lengstorf.com/find-time",
        parentName: "p"
    }, "find time to do the things I care about"), "."), mdx("h2", {
        id: "why-cant-i-stick-to-the-things-i-want-to-do"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#why-cant-i-stick-to-the-things-i-want-to-do",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Why can't I stick to the things I want to do..?"), mdx("p", null, "What I was curious about, though, was ", mdx("em", {
        parentName: "p"
    }, "why"), " I'd fallen off track. I didn't suddenly forget that I liked writing. I hadn't shifted focus away from writing. And I certainly hadn't forgotten the advice I was giving to other people: ", mdx("a", {
        href: "https://lengstorf.com/do-it-every-day",
        parentName: "p"
    }, mdx("em", {
        parentName: "a"
    }, "if it's important, do it every day")), "."), mdx("p", null, "The plan seemed simple enough: do a couple working blocks[^blocks] on my critical projects, then dedicate the last block to writing."), mdx("p", null, "[^blocks]:\nA \"working block\" for me is typically 90 minutes of distraction-free time where I focus on one task. This is part of the ", mdx("a", {
        href: "https://lengstorf.com/scheduling-maximum-productivity",
        parentName: "p"
    }, "productivity strategy"), " that lets me keep my working hours below 30 per week while tackling a full-time workload."), mdx("p", null, "So what was going wrong? Why was I failing to do something I both enjoy doing ", mdx("em", {
        parentName: "p"
    }, "and"), " consider valuable to my happiness?"), mdx("p", null, "I don't have any magical answers, but I do have a theory:"), mdx("ol", null, mdx("li", {
        parentName: "ol"
    }, "I had too many active demands on my time."), mdx("li", {
        parentName: "ol"
    }, "I was running into context problems.")), mdx("h3", {
        id: "what-are-active-demands"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#what-are-active-demands",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "What are active demands?"), mdx("p", null, "I consider myself to be pretty motivated. I like creating things. So to the logical part of my brain, taking some time to write each day seems like it should be a foregone conclusion."), mdx("p", null, "However, ", mdx("em", {
        parentName: "p"
    }, "taking time to write"), " is its own activity. ", mdx("strong", {
        parentName: "p"
    }, "I have to make an active decision to stop what I'm doing and start writing.")), mdx("p", null, "That makes writing an \"active demand\": a task requiring conscious effort — however small the effort seems."), mdx("p", null, "During the day, I deal with lots of small active demands, such as forcing myself to put on gym clothes when I'd rather stay in bed, or closing down the software project I'm working on to write."), mdx("p", null, "These demands are almost all trivial. They're not ", mdx("em", {
        parentName: "p"
    }, "hard"), " or ", mdx("em", {
        parentName: "p"
    }, "important"), " decisions; they're just things that require conscious choice and willpower."), mdx("p", null, "Researchers have found that ", mdx("a", {
        href: "http://www.wsj.com/articles/SB10001424052748703478704574612052322122442",
        parentName: "p"
    }, "willpower is an exhaustible resource"), ". ", mdx("strong", {
        parentName: "p"
    }, "If I have to make a lot of active decisions throughout the first part of my day, by the afternoon I'm fried."), " And when I'm fried, I struggle to make ", mdx("em", {
        parentName: "p"
    }, "any"), " decisions, let alone the tough-but-good-for-me variety."), mdx("p", null, "As my day goes on, active demands pile up — no matter how small they are — and my willpower drains. By the time I've fought off my inner fatshit and dragged myself to the gym, stepped through the rest of my morning activities, settled in to work on my current project, and put in a solid few hours of programming, I just don't have enough willpower left to force myself to switch contexts and start writing."), mdx("p", null, "My creative brain gets tired faster than my programmer brain,[^variable] so after a couple programming blocks I'm too mentally tired for creative writing, but I still have plenty left in the tank for coding — ", mdx("strong", {
        parentName: "p"
    }, "I was inadvertently sabotaging myself by trying to write later in the day.")), mdx("p", null, "[^variable]:\nThe cognitive loads that demand more vary from person to person. I think I'm less taxed by the analytical processes because I have much more practice solving logical problems than creative ones. Someone who's been writing for decades and just picked up programming may feel exactly the opposite."), mdx("h3", {
        id: "how-does-context-fit-into-this"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#how-does-context-fit-into-this",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "How does context fit into this?"), mdx("p", null, "I'm a firm believer that ", mdx("a", {
        href: "https://lengstorf.com/scheduling-maximum-productivity",
        parentName: "p"
    }, "the key to high productivity is context-based scheduling"), "."), mdx("p", null, "In order to keep myself productive, I group all of my tasks by the ", mdx("em", {
        parentName: "p"
    }, "kind of work"), " they require: email and social media and catching up with family in one group; software, accounting, and complex problem solving in another; creative efforts like design and writing in a third."), mdx("p", null, "Under my initial plan — work on software for a couple blocks, then do a block on writing — I was able to break up the contexts the way I prefer. In theory, this should have been easy for me."), mdx("p", null, "In practice, however, it wasn't happening. I'd usually end up doing a third block on the software projects and defer the writing to \"later\"."), mdx("p", null, "The failure point, I think, is that ", mdx("strong", {
        parentName: "p"
    }, "I wasn't taking a long enough break between contexts.")), mdx("p", null, "Ten or fifteen minutes is plenty when I'm planning to go back to a similar context in my next block, but it can take me as long as an hour to ", mdx("em", {
        parentName: "p"
    }, "truly"), " shift contexts."), mdx("p", null, "So while I was coming into my third block with the right intentions, I was still thinking with my programmer brain, and that meant writing sounded worse than continuing to solve whatever problems I'd been working on in code for the last couple hours."), mdx("blockquote", null, mdx("p", {
        parentName: "blockquote"
    }, "Further reading: ", mdx("a", {
        href: "https://lengstorf.com/scheduling-maximum-productivity",
        parentName: "p"
    }, "Scheduling for Maximum Productivity"))), mdx("h2", {
        id: "solving-the-problem"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#solving-the-problem",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Solving the problem"), mdx("p", null, "If my theory is true, ", mdx("strong", {
        parentName: "p"
    }, "I'm failing to write consistently because I'm running out of willpower."), " I've been requiring myself to make a conscious decision to sit down and write, and I've been placing that decision in a context that made the decision more difficult."), mdx("p", null, "The solution, then, is something that addresses both challenges:"), mdx("ol", null, mdx("li", {
        parentName: "ol"
    }, "The decision to write should be a passive demand."), mdx("li", {
        parentName: "ol"
    }, "The act of writing should avoid overlapping with other contexts.")), mdx("h3", {
        id: "make-decisions-passive-by-creating-a-routine"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#make-decisions-passive-by-creating-a-routine",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Make decisions passive by creating a routine."), mdx("p", null, "I have a bedtime routine: I set my phone to charge in a place away from the bed, floss and brush my teeth, and bring water to my bedside."), mdx("p", null, "If I try to change the order — say brushing my teeth and flossing, then sitting in bed with my phone for a while — I almost always end up wasting an extra hour scrolling through social media or playing a game."), mdx("p", null, "However, I've never settled in, then ", mdx("em", {
        parentName: "p"
    }, "gotten out of bed"), " to go get my phone. ", mdx("strong", {
        parentName: "p"
    }, "The routine makes the right thing the easy thing.")), mdx("p", null, "This is because the routine takes away the active demands: ", mdx("em", {
        parentName: "p"
    }, "on the way"), " to brush my teeth, I put my phone away for the night."), mdx("p", null, "I don't have to ", mdx("em", {
        parentName: "p"
    }, "decide"), " to put it away. It's an established step in a larger process: I do it \"on the way\" to something else."), mdx("p", null, "This is what James Clear calls a ", mdx("strong", {
        parentName: "p"
    }, mdx("a", {
        href: "http://jamesclear.com/habit-triggers",
        parentName: "strong"
    }, "habit trigger"), ": a thing or event in our environment or our behavior that cues us to do something else."), " Think \"socks and shoes\" — those are actually two distinct acts, but we've combined them as a cultural routine: putting on socks triggers putting on shoes."), mdx("p", null, "So if I want to be consistent as a writer, I don't need to ", mdx("em", {
        parentName: "p"
    }, "decide"), " to write every day. I need to make sure that writing is ", mdx("em", {
        parentName: "p"
    }, "part of what I do every day"), "."), mdx("p", null, "This is my first objective: ", mdx("strong", {
        parentName: "p"
    }, "I need a writing trigger.")), mdx("h3", {
        id: "do-the-more-demanding-thing-first"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#do-the-more-demanding-thing-first",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Do the more demanding thing first."), mdx("p", null, "The two things I struggle most to stay consistent with are writing and going to the gym."), mdx("p", null, "These are both things that I like, and that make me feel good when I stay consistent with them. But they're also things that cause me discomfort.[^discomfort] So if I give myself an out, it's ", mdx("em", {
        parentName: "p"
    }, "very easy"), " for me to take it — even though I know blowing off a workout or writing session will make me feel worse."), mdx("p", null, "[^discomfort]:\nWhen I'm writing, I'm frustrated because the thought in my head that was so brilliant when I had the idea is falling flat because I can't string the right words together. In the gym, I'm cursing this do-squats-until-you-throw-up-or-pass-out workout because ", mdx("em", {
        parentName: "p"
    }, "OH GOD IT BURNS SO DEEP!")), mdx("p", null, "I also know that there's a strong correlation between the number of hours I've been awake and the number of excuses I'll make to avoid things that aren't comfortable and easy for me. This is due to willpower fatigue.[^experiment]"), mdx("p", null, "[^experiment]:\nIn a ", mdx("a", {
        href: "http://www.opiniondynamics.com/2013/12/decision-fatigue/",
        parentName: "p"
    }, "willpower experiment"), ", two groups of people were asked to remember numbers. Group One was given a two-digit number; Group Two received a seven-digit number. After memorizing it, both groups were offered a snack: cake or fruit. The group that put more mental effort into memorizing a seven-digit number was almost ", mdx("em", {
        parentName: "p"
    }, "twice as likely"), " to choose cake. The second group's will was broken by a single, medium-hard mental challenge. Our willpower is ", mdx("em", {
        parentName: "p"
    }, "frail"), "."), mdx("p", null, "Since both writing and working out present a challenge for my willpower, and my willpower is strongest in the morning, I can increase my chances of actually following through by scheduling them for the morning."), mdx("p", null, "This is my second objective: ", mdx("strong", {
        parentName: "p"
    }, "I need to work ", mdx("em", {
        parentName: "strong"
    }, "with"), " willpower — rather than against it — by front-loading the tasks that challenge my willpower most.")), mdx("h2", {
        id: "how-a-morning-routine-might-solve-all-my-problems"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#how-a-morning-routine-might-solve-all-my-problems",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "How a morning routine might solve all my problems"), mdx("p", null, "I set out a couple weeks ago to address my writing lapse. My plan was to come up with a way to meet my two objectives:"), mdx("ol", null, mdx("li", {
        parentName: "ol"
    }, "Create a trigger habit for writing."), mdx("li", {
        parentName: "ol"
    }, "Front-load writing to leverage my willpower.")), mdx("p", null, "I've seen dozens of articles posted about \"successful people\"[^air-quotes] and their \"morning rituals\" — and promptly blew them off as fetishizing an Early Bird Gets the Worm mentality."), mdx("p", null, "[^air-quotes]:\nI'm demoting this claim to something that needs air-quotes to say out loud, because I don't believe that \"powerful\" or \"rich\" necessarily means \"successful\" — a millionaire CEO who can't get away from work long enough to spend time with their kids or enjoy the money they’re earning sounds more like a failure to me."), mdx("p", null, "But between the inevitable Steve Jobs quote and 4:30am wake-up recommendation,[^early-bird] there's a pattern in these rituals:"), mdx("p", null, "[^early-bird]:\nI want to make something perfectly clear: ", mdx("strong", {
        parentName: "p"
    }, "I do not give a fuck what time you wake up."), " I think time is a stupid thing to fixate on, and saying that someone who wakes up at 5am will be more successful than someone who wakes up at 10am is absurd. The early bird doesn't get the worm; ", mdx("em", {
        parentName: "p"
    }, "the bird that keeps showing up to do the work"), " gets the worm. No matter what time of day it is."), mdx("p", null, mdx("strong", {
        parentName: "p"
    }, "Most of these rituals involve doing things that most people struggle to do consistently ", mdx("em", {
        parentName: "strong"
    }, "first thing in the morning"), ".")), mdx("p", null, "This is exciting, because it's anecdotal evidence that my theory is correct, and that I'll be able to meet my two objectives using a morning routine.[^sad]"), mdx("p", null, "[^sad]:\nIt's also a little sad because — as usual — I've been staring at the answer for years in other people's success, and I just didn't bother to pay any attention until after I'd already gone through the hassle of reinventing the solution on my own."), mdx("h3", {
        id: "building-the-routine"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#building-the-routine",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Building the routine"), mdx("p", null, "With my objectives in mind, I went to work creating my own morning ritual. Here's what I'm currently doing each morning:"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "Wake up without an alarm[^alarm]"), mdx("li", {
        parentName: "ul"
    }, "Spend a few minutes doing my blink-and-stare thing, then grab a coffee"), mdx("li", {
        parentName: "ul"
    }, "Read a few articles to get my brain engaged[^articles]"), mdx("li", {
        parentName: "ul"
    }, "Open my laptop and write for about 90 minutes"), mdx("li", {
        parentName: "ul"
    }, "Walk to the gym and work out"), mdx("li", {
        parentName: "ul"
    }, "Head to breakfast with Marisa"), mdx("li", {
        parentName: "ul"
    }, "Go home, shower, and start work on whatever is on my list for the day")), mdx("p", null, "[^alarm]:\nThis is one of the biggest quality of life improvements I’ve made. I go to bed early (around 10 pm) and wake up without an alarm around 6 am feeling like a goddamn champion."), mdx("p", null, "I know it's not an option for everyone, but if you can remove the alarm from your life, ", mdx("em", {
        parentName: "p"
    }, "do it."), " When I wake up naturally, I have energy and I'm ready to get started."), mdx("p", null, "[^articles]:\nI read industry blogs so I can at least pretend I understand what's happening in my professional field, and ", mdx("a", {
        href: "http://www.mcsweeneys.net/articles/its-decorative-gourd-season-motherfuckers",
        parentName: "p"
    }, "imaginatively bizarre posts from McSweeney's"), " and its ilk to help kickstart my own creativity."), mdx("p", null, "It's important to note that ", mdx("em", {
        parentName: "p"
    }, "the only thing that changed in my ritual was to add reading and writing before the gym"), ". Before, I'd wake up, have coffee, work out, and head to breakfast. Now I have coffee ", mdx("em", {
        parentName: "p"
    }, "and write"), ", then work out and head to breakfast."), mdx("p", null, "A small change, and one that — so far at least — has resulted in better consistency."), mdx("h2", {
        id: "why-this-routine-works-for-me"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#why-this-routine-works-for-me",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Why this routine works for me"), mdx("p", null, "After a couple weeks of following this new routine, I've been amazed by the results. On reflection, there are several small factors that add up to this big difference."), mdx("h3", {
        id: "1-ive-removed-the-active-demand"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#1-ive-removed-the-active-demand",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "1. I've removed the active demand."), mdx("p", null, "I don't have to ", mdx("em", {
        parentName: "p"
    }, "decide"), " to write. I just know that once I have coffee, I'm going to open my laptop and put some words down. ", mdx("strong", {
        parentName: "p"
    }, "The routine states that writing is a thing that ", mdx("em", {
        parentName: "strong"
    }, "will happen"), "."), " It's no longer a thing that I will ", mdx("em", {
        parentName: "p"
    }, "try to make happen if I have the time and also don't get too hungry first"), "."), mdx("h3", {
        id: "2-i-have-a-habit-trigger"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#2-i-have-a-habit-trigger",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "2. I have a habit trigger."), mdx("p", null, "I grab my laptop ", mdx("em", {
        parentName: "p"
    }, "on the way back"), " from grabbing coffee. I'm reminded every morning by the act of getting coffee — a thing I do every day — to get my laptop. ", mdx("strong", {
        parentName: "p"
    }, "The trigger makes the first step toward writing almost automatic."), " Coffee and laptop. Like socks and shoes."), mdx("h3", {
        id: "3-i-have-more-willpower-and-creativity-in-the-morning"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#3-i-have-more-willpower-and-creativity-in-the-morning",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "3. I have more willpower (and creativity) in the morning."), mdx("p", null, "Saying no to cheesecake is very, very easy to do first thing in the morning because my willpower tank is full. When I write first thing in the morning, ", mdx("strong", {
        parentName: "p"
    }, "I can leverage my brain chemistry to make it easier to do the stuff I want to do."), " This removes the need to rely on willpower later in the day, when I'm running on empty."), mdx("h3", {
        id: "4-im-creating-an-extra-work-day-with-a-really-long-break-between-contexts"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#4-im-creating-an-extra-work-day-with-a-really-long-break-between-contexts",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "4. I'm creating an \"extra\" work day with a really long break between contexts."), mdx("p", null, "A surprise benefit of my new morning routine was feeling like I have two \"work days\" each day. Before, I'd sit down after breakfast to work and complete three or four working blocks with short breaks in between. The working blocks could span multiple contexts, but it was harder to shift into some contexts than others."), mdx("p", null, "By adding a ", mdx("em", {
        parentName: "p"
    }, "huge"), " break of two or three hours between my first working block (writing) and my later working blocks (development or communication, typically), I noticed a big difference: ", mdx("strong", {
        parentName: "p"
    }, "after a long break between context shifts, I felt like I was starting completely fresh.")), mdx("p", null, "My second working block felt like my first — a workout and breakfast is a full reset button that leaves me so refreshed it's like I never did the first working block at all, from a fatigue or context lock-in standpoint."), mdx("p", null, "I spend the same amount of time working as before, but I break it apart differently — with incredible results."), mdx("h3", {
        id: "5-the-new-routine-is-so-easy-to-follow-that-it-doesnt-feel-like-work"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#5-the-new-routine-is-so-easy-to-follow-that-it-doesnt-feel-like-work",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "5. The new routine is so easy to follow that it doesn't feel like work."), mdx("p", null, "In the past, I've tried to implement new standards for myself, fought hard to keep them up with varying levels of success, and ultimately found myself sliding back toward the baseline where I started."), mdx("p", null, "In contrast, ", mdx("strong", {
        parentName: "p"
    }, "my most successful lifestyle changes never feel like work because they're so effortless."), " I barely notice the change, and that's the secret sauce in making big changes."), mdx("p", null, "This routine falls in the latter category, because I don't feel a strain implementing this new routine. I didn't have to start waking up earlier, or ", mdx("a", {
        href: "https://lengstorf.com/problem-with-the-grind/",
        parentName: "p"
    }, "\"grinding out\" a little extra"), " for my own good."), mdx("p", null, "Instead, I rearranged the things I was already doing in a way that effortlessly and painlessly created space for something rewarding. By moving my writing from the afternoon, where I struggled with it, to the morning, where writing came easily, I made my life easier ", mdx("em", {
        parentName: "p"
    }, "and"), " saw more success. ", mdx("strong", {
        parentName: "p"
    }, "I didn't create a struggle for the sake of progress; I ", mdx("em", {
        parentName: "strong"
    }, "removed"), " a struggle and progress followed.")), mdx("h2", {
        id: "things-that-have-nothing-to-do-with-why-the-routine-works"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#things-that-have-nothing-to-do-with-why-the-routine-works",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Things that have nothing to do with why the routine works"), mdx("p", null, "I think it's worth mentioning that I didn't claim my routine is working ", mdx("em", {
        parentName: "p"
    }, "because of the exact things I'm doing, or the order in which I'm doing them"), "."), mdx("p", null, "It doesn't matter ", mdx("em", {
        parentName: "p"
    }, "what"), " I'm doing. ", mdx("strong", {
        parentName: "p"
    }, "What matters is that I've organized the things I consider important into an order that works ", mdx("em", {
        parentName: "strong"
    }, "for me")), " in a way that leverages ", mdx("em", {
        parentName: "p"
    }, "my own daily rhythms"), "."), mdx("p", null, "I'm more creative in the mornings, and writing is harder for me than coding. A workout gives me energy that carries me through the day. A slow breakfast with my partner keeps me relaxed and lets us spend time together before we start working.[^ignoring-you]"), mdx("p", null, "[^ignoring-you]:\nThe people watching us work in a coffee shop probably think we're the worst: \"Jesus, those two haven't even ", mdx("em", {
        parentName: "p"
    }, "looked"), " at each other since they sat down. Just threw on headphones and opened their laptops. You see?! ", mdx("em", {
        parentName: "p"
    }, "This"), " is what's wrong with our culture, Miriam! ", mdx("em", {
        parentName: "p"
    }, "This"), " is why everything is in the shitter! People don't talk anymore!\""), mdx("p", null, "But this works for me because it is specifically built for me. If I tried to adopt some millionaire CEO's morning routine, I'd be miserable."), mdx("p", null, "The trick to a successful routine isn't mimicking someone else; it's looking at their approach, understanding the reasons they did it that way, and using those reasons to build ", mdx("em", {
        parentName: "p"
    }, "your own"), " strategy — one that fits your unique situation."), mdx("h2", {
        id: "is-this-forever"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#is-this-forever",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Is this forever?"), mdx("p", null, "I sincerely doubt that I'll follow this routine until I die. Later, when I have new information, or a new situation, or a different priority, I will inevitably change my approach."), mdx("p", null, "But for now, ", mdx("strong", {
        parentName: "p"
    }, "I've been able to get in an hour and a half of writing every day"), " following this routine, without getting less done elsewhere. For now, I don't feel guilty about ignoring something I care about."), mdx("p", null, "So while I'm sure I'll need to create a new routine in the future to address some other area of my life that I'm neglecting, for now this routine is good enough — and compared to where I was before, it feels like magic."));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
