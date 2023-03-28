// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for about documents */
interface AboutDocumentData {
    /**
     * title field in *about*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: about.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * description field in *about*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * banner field in *about*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: about.banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * facebook field in *about*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: about.facebook
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    facebook: prismicT.LinkField;
    /**
     * instagram field in *about*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: about.instagram
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    instagram: prismicT.LinkField;
    /**
     * youtube field in *about*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: about.youtube
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    youtube: prismicT.LinkField;
    /**
     * linkedin field in *about*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: about.linkedin
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    linkedin: prismicT.LinkField;
}
/**
 * about document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;
/** Content for Home documents */
interface HomeDocumentData {
    /**
     * title field in *Home*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: home.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * sub title field in *Home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.sub_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    sub_title: prismicT.RichTextField;
    /**
     * link action field in *Home*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: home.link_action
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link_action: prismicT.LinkField;
    /**
     * mobile field in *Home*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: home.mobile
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    mobile: prismicT.TitleField;
    /**
     * mobile content field in *Home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.mobile_contenr
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    mobile_contenr: prismicT.RichTextField;
    /**
     * mobile banner field in *Home*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home.mobile_banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    mobile_banner: prismicT.ImageField<never>;
    /**
     * web content field in *Home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.web_content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    web_content: prismicT.RichTextField;
    /**
     * web banner field in *Home*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home.web_banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    web_banner: prismicT.ImageField<never>;
    /**
     * title web field in *Home*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: home.title_web
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title_web: prismicT.TitleField;
}
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for post documents */
interface PostDocumentData {
    /**
     * title field in *post*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Título do Post
     * - **API ID Path**: post.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * cover field in *post*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: post.cover
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    cover: prismicT.ImageField<never>;
    /**
     * description field in *post*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Conteúdo do seu post
     * - **API ID Path**: post.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;
export type AllDocumentTypes = AboutDocument | HomeDocument | PostDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { AboutDocumentData, AboutDocument, HomeDocumentData, HomeDocument, PostDocumentData, PostDocument, AllDocumentTypes };
    }
}
