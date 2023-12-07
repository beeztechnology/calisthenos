'use client'
import React, { useEffect } from 'react'
import ExerciseDescriptorTable from "../components/ExerciseDescriptorTable"
import useExercises from "@/hooks/useExercises"

export default function Ejercicios() {
  const { exercises, updateExercises } = useExercises()

  useEffect(() => {
    updateExercises()
  }, [updateExercises])

  return (
    <ExerciseDescriptorTable exercises={exercises} />
  )
}
