import categoryIds from './category-ids'

const media = [
  {
    id: categoryIds.editor,
    label: {
      english: 'Editorial Department',
      chinese: '編 輯 部',
    },
  },
  {
    id: categoryIds.socialMedia,
    label: {
      english: 'Social Media Department',
      chinese: '社 群 部',
    },
  },
  {
    id: categoryIds.photojournalist,
    label: {
      english: 'Photography Department',
      chinese: '攝 影 部',
    },
  },
  {
    id: categoryIds.marketing,
    label: {
      english: 'Marketing Department',
      chinese: '行 銷 部',
    },
  },
  {
    id: categoryIds.engineer,
    label: {
      english: 'Engineering Department',
      chinese: '工 程 部',
    },
  },
  {
    id: categoryIds.designer,
    label: {
      english: 'Design Department',
      chinese: '設 計 部',
    },
  },
  {
    id: categoryIds.podcast,
    label: {
      english: 'Podcast Department',
      chinese: 'Podcast 小 組',
    },
  },
  {
    id: categoryIds.productManager,
    label: {
      english: 'Product Manager',
      chinese: '產 品 經 理',
    },
  },
]

const foundation = [
  {
    id: categoryIds.foundation,
    label: {
      chinese: '基 金 會',
      english: 'Foundation',
    },
  },
]

export default {
  foundation,
  media,
}
