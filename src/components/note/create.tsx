import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { priorities } from '@/models/priorities'
import { create as createNote } from '@/models/notes'

export default function CreateNote() {
  function create(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const data = {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      pinned: formData.get('pinned') === '1',
      reminderDate: new Date(formData.get('reminderDate') as string),
      priority: Number(formData.get('priority')),
    }

    createNote(data)
    form.reset()
  }

  return (
    <form onSubmit={create}>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" name="title" required />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <Textarea name="content" id="content" rows={3} />
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <Select name="priority">
          <SelectTrigger id="priority">
            <SelectValue placeholder="Select priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {priorities.map(priority => (
                <SelectItem value={priority.id.toString()} key={priority.id}>{priority.label}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="reminderDate">Reminder Date</label>
        <Input type="date" id="reminderDate" name="reminderDate" />
      </div>
      <div>
        <label htmlFor="pinned">Pinned</label>
        <Checkbox id="pinned" name="pinned" value={1} />
      </div>
      <Button type="submit">Create</Button>
    </form>
  )
}
