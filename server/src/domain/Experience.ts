export class Experience {
  /** ID */
  id: string;
  /** Title */
  title: string;
  /** スラッグ URLなどで使用する文字列 */
  slug: string;
  /** 一人あたりの金額 */
  pricePerGuest: number;
  /** 最大催行人数 */
  maxGuests: number;

  constructor({ id, title, slug, pricePerGuest, maxGuests }: Experience) {
    this.id = id;
    this.title = title;
    this.slug = slug;
    this.pricePerGuest = pricePerGuest;
    this.maxGuests = maxGuests;
  }
}
