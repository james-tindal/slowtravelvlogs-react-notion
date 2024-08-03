// import { isSearchEnabled } from './lib/config'
import { siteConfig } from './lib/site-config'

import { FiYoutube } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi';
import { BiHomeAlt } from 'react-icons/bi';
import { FaInstagram } from 'react-icons/fa'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'ee94bce9c306401aba07ede45e6930ba',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Slow Travel Vlogs',
  domain: 'slowtravelvlogs.com',
  author: 'Alice',

  // open graph metadata (optional)
  description: 'Vlogs about travelling',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/oslo': 'e97c64a952c94e53ac61b05401cb1038',
    '/copenhagen': '3e764adb65534b8fa6822ae84d24a0e6',
    '/aarhus': '1d73bb911df046838d5e88c46d613356',
    '/helsinki': 'd6c051fb19d3433ba7fc1af638a28e7f',
    '/talinn': '525198b8a47f4cbf9f5482cd2f2ce7e4',
    '/riga': '18b91108e39b4bc386f3c3d171c47a2d',
    '/vilnius': '75eb71e23d8c40d3bcaf9ddabea41a13',
    '/trakai': 'd45f2cd0533c498d8aa68ec2013e72d7',
    '/cambridge': '511835c1b9f647c7bc8b5a1fc5f08d9a',
    '/folkestone': '2942de7350ed4d8abe38f450f2f4327b',
    '/fes': '7e1053e02163482f82deb4c6e2bf3506',
    '/travel-essentials': '1571f45206d94e15b236c05ded0c7d34',
    '/chefchaouen': 'b69ac66dcf7140fb94f947a628e2892a',
    '/tangier': 'f6df6faa61b24c2cbd98f53fec20c692',
    '/tarifa': 'e6e74c8a1dac4c709e588e7999c0e608',
    '/gibraltar': '8360b11c49b04c9290d8dee8de4ebc6b',
    '/zadar': '38a73679053440bd8c6402a066658495',
    '/telascica': '05c27ffeaff44f01b581b5b1308fa983',
    '/krka': '7c26757fade84de3a15b64d1b81d235a',
    '/split': '767232d7a11c421e97b45e99ecce46c0',
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: <BiHomeAlt size={16} title="Home" />,
      pageId: 'ee94bce9c306401aba07ede45e6930ba'
    },
    {
      title: <FiYoutube size={16} title="Youtube" />,
      url: 'https://youtube.com/@slowtravelvlogs'
    },
    {
      title: <FaInstagram size={16} title="Instagram" />,
      url: 'http://www.instagram.com/slowtravelvlogs'
    },
    {
      title: <HiOutlineMail size={16} title="Contact me" />,
      url: 'https://tally.so/r/n0x9pj'
    }
  ],

  isSearchEnabled: false
})
