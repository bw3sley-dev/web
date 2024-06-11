import { Button } from '@/components/ui/button'

import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { Input, Control } from '@/components/ui/input'

import { Loader2Icon } from 'lucide-react'

import { Label } from '@/components/ui/label'

import { Controller } from 'react-hook-form'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function UpdateVolunteerDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edição de voluntário</DialogTitle>
      </DialogHeader>

      <div className="flex flex-col">
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-sm text-slate-400">
              Nome
            </Label>

            <Input>
              <Control
                placeholder="Para qual e-mail você gostaria de alterar?"
                type="text"
                className="text-sm"
                autoComplete="off"
              />
            </Input>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-sm text-slate-400">
              Área
            </Label>

            <Controller
              name="gender"
              control={control}
              render={({ field: { onChange, value, disabled } }) => (
                <Select
                  onValueChange={onChange}
                  value={value}
                  disabled={disabled}
                  {...register('gender')}
                >
                  <SelectTrigger className="h-12 w-full lg:w-[300px] bg-slate-900 text-base">
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="none">Selecione uma opção</SelectItem>

                    <SelectItem value="MALE">Masculino</SelectItem>

                    <SelectItem value="FEMALE">Feminino</SelectItem>
                  </SelectContent>
                </Select>
              )}
            ></Controller>
          </div>

          <DialogFooter className="mt-3">
            <DialogClose asChild>
              <Button
                type="button"
                variant="default"
                className="rounded-md"
                size="sm"
              >
                Fechar
              </Button>
            </DialogClose>

            <Button
              type="submit"
              variant="primary"
              className="rounded-md"
              size="sm"
            >
              {isSubmitting && (
                <Loader2Icon strokeWidth={3} className="animate-spin size-4" />
              )}
              <span>Confirmar alteração</span>
            </Button>
          </DialogFooter>
        </form>
      </div>
    </DialogContent>
  )
}
