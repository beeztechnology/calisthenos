import React, { useCallback, useState } from 'react'

export default function useExercises() {
  const [exercises, setExercises] = useState([])

  const updateExercises = useCallback(() => {
    if (exercises.length > 0) return
    fetch(`/api/exercises`)
      .then(async (response) => {
        setExercises(await response.json())
      })
  }, [exercises])

  return {
    exercises,
    updateExercises
  }
}
