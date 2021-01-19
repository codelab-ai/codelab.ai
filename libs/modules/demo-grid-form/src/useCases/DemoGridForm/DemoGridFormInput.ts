export interface DemoGridFormInput {
  /**
   * {"order":1, "span": 12}
   * */
  email1: string
  /**
   * {"order":0, "span": 16}
   * */
  password0: string
  /**
   * {"order":2, "span": 8}
   * */
  name2: string
  notGroupedField: string
  groupedField: {
    /**
     * {"order":1, "span": 4}
     * */
    test1: string
    /**
     * {"order":0, "span": 12}
     * */
    test2: string
  }
}
