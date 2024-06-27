import { EventDispatcher } from "three"

export default class Time extends EventDispatcher
{
    constructor()
    {
        super()
        // Setup
        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16
        this.playing = true;
        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }
    tick()
    {
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start
        this.dispatchEvent({ type: 'tick', message: 'Tick occured!' })
        window.requestAnimationFrame(() =>
        {
            if(this.playing) {
                this.tick()
            }
        });
    }
    pause()
    {
        this.playing = false;
    }
    play()
    {
        this.playing = true;
        this.tick();
    }
}