import { IsSpecification } from './node-specification'

export class Validator {
  rules: Array<IsSpecification> = []

  addRule(rule: IsSpecification) {
    this.rules = [...this.rules, rule]

    return this
  }

  validate<T>(data: T) {
    this.rules.forEach((rule) => {
      if (!rule.isSatisfiedBy(data)) {
        throw new Error(`${data} is not satisfied by ${rule}`)
      }
    })

    return true
  }
}
