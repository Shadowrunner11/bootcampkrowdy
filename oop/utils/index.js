export function getRandomInteger(maxLimit, minLimit = 1){
  const randomNumber = Math.random()*(maxLimit - minLimit) + minLimit

  return Math.round(randomNumber)
}
