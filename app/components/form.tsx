import { Input } from '@/components/ui/input';

const Form = () => {
  return (
    <form className='flex justify-between gap-4 flex-col md:flex-row'>
      <Input
        type='text'
        name='message'
        maxLength={80}
        minLength={1}
        placeholder='your message...'
        required
      />
    </form>
  );
};
export default Form;
