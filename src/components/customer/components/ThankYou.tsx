import { sendGAEventCustom } from '@/utils/Helper'
import { Button } from '@/components/Button'

function ThankYou() {
  return (
    <div className="relative mx-auto max-w-2xl text-center my-14 sm:p-6 bg-white/50 rounded-xl">
      <h1 className="text-3xl font-display font-bold text-shamrock">
        Thank you for joining Pitaku!
      </h1>
      <p className="text-lg my-6 leading-loose">
        We&#39;re excited to have you on board.
        <br />
        Stay tuned for more updates, and thank you for your patience and
        support.
      </p>
      <Button
        href="/"
        color="green"
        className="mt-10"
        onClick={() =>
          sendGAEventCustom({
            action: 'click',
            category: 'Button',
            label: `Go back home`,
            value: `Go back home`,
          })
        }
      >
        Go back home
      </Button>
    </div>
  )
}

export default ThankYou
