"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

const enhanceData = {
  weapon: [1.0, 1.0, 1.0, 1.0, 1.0, 0.51, 0.28, 0.18, 0.13, 0.10, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.08, 0.08, 0.08, 0.08],
  armor: [1.0, 1.0, 1.0, 1.0, 1.0, 0.42, 0.26, 0.18, 0.13, 0.10, 0.10, 0.10, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.08, 0.08],
  accessory: [1.0, 0.74, 0.40, 0.29, 0.23, 0.19, 0.15, 0.13, 0.11, 0.10, 0.10, 0.10, 0.09, 0.09, 0.09, 0.09, 0.09, 0.08, 0.08, 0.08],
  mantle: [1.0, 0.83, 0.44, 0.29, 0.23, 0.19, 0.15, 0.13, 0.11, 0.10, 0.10, 0.10, 0.09, 0.09, 0.09, 0.09, 0.09, 0.08, 0.08, 0.08],
  subWeapon: [1.0, 0.62, 0.36, 0.23, 0.18, 0.14, 0.11, 0.10, 0.10, 0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0.08, 0.08, 0.08, 0.08, 0.08],
  greaves: [1.0, 0.83, 0.44, 0.29, 0.23, 0.19, 0.15, 0.13, 0.11, 0.10, 0.10, 0.10, 0.09, 0.09, 0.09, 0.09, 0.09, 0.08, 0.08, 0.08],
  paidAccessory: {
    brooch: [1.0, 0.85, 0.55, 0.39, 0.33, 0.29, 0.26, 0.16, 0.13, 0.12, 0.11, 0.11, 0.10, 0.10, 0.10, 0.09, 0.09, 0.09, 0.08, 0.08],
    pendant: [1.0, 0.85, 0.56, 0.40, 0.37, 0.35, 0.33, 0.16, 0.13, 0.12, 0.11, 0.11, 0.10, 0.10, 0.10, 0.09, 0.09, 0.09, 0.08, 0.08],
    amulet: [1.0, 0.85, 0.56, 0.40, 0.37, 0.35, 0.33, 0.16, 0.13, 0.12, 0.11, 0.11, 0.10, 0.10, 0.10, 0.09, 0.09, 0.09, 0.08, 0.08],
    epaulet: [1.0, 0.85, 0.54, 0.38, 0.29, 0.23, 0.19, 0.16, 0.13, 0.12, 0.11, 0.11, 0.10, 0.10, 0.10, 0.09, 0.09, 0.09, 0.08, 0.08],
    badge: [1.0, 0.85, 0.54, 0.38, 0.29, 0.23, 0.19, 0.16, 0.13, 0.12, 0.11, 0.11, 0.10, 0.10, 0.10, 0.09, 0.09, 0.09, 0.08, 0.08],
    insignia: [1.0, 0.81, 0.51, 0.37, 0.28, 0.22, 0.18, 0.15, 0.13, 0.11, 0.11, 0.10, 0.10, 0.10, 0.09, 0.09, 0.09, 0.08, 0.08, 0.08],
    horn: [1.0, 0.83, 0.52, 0.37, 0.28, 0.23, 0.18, 0.15, 0.13, 0.11, 0.11, 0.10, 0.10, 0.10, 0.09, 0.09, 0.09, 0.08, 0.08, 0.08]
  },
  evaldiBoost: {
    weapon: [0.45, 0.40, 0.35, 0.30, 0.25, 0.20, 0.15, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10],
    armor: [0.45, 0.40, 0.35, 0.30, 0.25, 0.20, 0.15, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10],
    accessory: [0.25, 0.20, 0.15, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10],
    mantle: [0.25, 0.20, 0.15, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10],
    greaves: [0.25, 0.20, 0.15, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10],
    subWeapon: [0.25, 0.20, 0.15, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10]
  }
}

export default function GearEnhanceCalculator() {
  const [category, setCategory] = useState("weapon")
  const [subCategory, setSubCategory] = useState("")
  const [targetLevel, setTargetLevel] = useState<number | "">("")

  const isPaidAccessory = category === "paidAccessory"
  const isValidTargetLevel = Number.isFinite(Number(targetLevel)) && Number(targetLevel) > 0

  const selectedList = isPaidAccessory
    ? enhanceData.paidAccessory[subCategory] || []
    : enhanceData[category] || []

  const selectedProbs = isValidTargetLevel ? selectedList.slice(0, Number(targetLevel)) : []

  const expected = selectedProbs.length
    ? selectedProbs.reduce((acc, p) => acc * (1 / p), 1).toFixed(2)
    : "-"

  const enhanceProbText = isValidTargetLevel && Number(targetLevel) > 0
    ? `${Math.max(0, Number(targetLevel) - 1)} > ${targetLevel} 강화 시 성공 확률: ${(selectedList[Number(targetLevel) - 1] * 100).toFixed(2)}%`
    : "-"

  const evaldiText = (!isPaidAccessory && isValidTargetLevel && Number(targetLevel) > 1)
    ? `${Math.max(0, Number(targetLevel) - 2)} > ${targetLevel} 강화 시 성공 확률: ${(enhanceData.evaldiBoost[category][Number(targetLevel) - 1] * 100).toFixed(2)}%`
    : null

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card>
        <CardContent className="p-6 space-y-4">
          <Label>장비 종류 선택</Label>
          <Select value={category} onValueChange={(value) => {
            setCategory(value)
            setSubCategory("")
          }}>
            <SelectTrigger>
              <SelectValue placeholder="장비 종류" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weapon">무기</SelectItem>
              <SelectItem value="subWeapon">보조 무기</SelectItem>
              <SelectItem value="armor">방어구</SelectItem>
              <SelectItem value="mantle">망토</SelectItem>
              <SelectItem value="accessory">장신구</SelectItem>
              <SelectItem value="greaves">각반</SelectItem>
              <SelectItem value="paidAccessory">유료 장신구</SelectItem>
            </SelectContent>
          </Select>

          <Label className="pt-4">세부 종류 선택 (유료 장신구 선택 시)</Label>
          <Select value={subCategory} onValueChange={setSubCategory} disabled={!isPaidAccessory}>
            <SelectTrigger>
              <SelectValue placeholder="세부 장비 종류 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="brooch">브로치</SelectItem>
              <SelectItem value="pendant">펜던트</SelectItem>
              <SelectItem value="amulet">부적</SelectItem>
              <SelectItem value="epaulet">견장</SelectItem>
              <SelectItem value="badge">완장</SelectItem>
              <SelectItem value="insignia">문장</SelectItem>
              <SelectItem value="horn">호각</SelectItem>
            </SelectContent>
          </Select>

          <Label className="pt-4">목표 강화 단계</Label>
          <Input
            type="number"
            placeholder="목표 강화 수치를 입력해주세요."
            min={1}
            max={20}
            value={targetLevel}
            onChange={(e) => {
              const raw = e.target.value.replace(/[^0-9]/g, "")
              setTargetLevel(raw === "" ? "" : Math.max(1, Number(raw)))
            }}
          />

          <div className="pt-4">
            <p>🎯 기대값: <strong>{expected}</strong> 개</p>
            <p>📈 <strong>{enhanceProbText}</strong></p>
            {evaldiText && (
              <p>✨ <strong>{evaldiText}</strong></p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
