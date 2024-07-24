---
layout: home

hero:
  name: "Waldorf Collection"
  tagline: Một số ghi chép về phương pháp giáo dục Waldorf
  image:
    src: /icons/layers.png
    alt: VitePress
  actions:
    - theme: brand
      text: Bắt đầu
      link: /articles/what-is-waldorf-education
    - theme: alt
      text: Danh Mục
      link: /articles
features:
  - icon:
      src: /icons/language-94.png
    title: Multiple Language
    details: Dịch thuật luôn khó khăn, ngôn ngữ ngắn liền với tư tưởng của một dân tộc, một quốc gia. Việt dịch là không hoàn hảo, vậy chúng tôi xin để lại văn bản gốc để đọc giả tự mình nghiệm lấy nếu có thể.
  - icon:
      src: /icons/test-passed-94.png
    title: Trung đạo
    details: Chúng tôi tin rằng giáo dục cần phải trung đạo, không quá cứng nhắc, không quá lỏng lẻo. Sự giáo dục đúng giống như đi trên chỉ mảnh, không thể quá chặt, cũng không thể quá lỏng. Thiếu một chút, thừa một chút đều không tốt.
  - icon:
      src: /icons/plant-94.png
    title: Human centric
    details: Bất kể tôn giáo, đức tin của bạn là gì, chúng tôi tin rằng, trong giáo dục con người thì con người phải là trung tâm.
---
<style lang="css">
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

## New Articles

<ArticleList/>
