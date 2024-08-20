import { Component, inject, OnDestroy, OnInit, signal } from "@angular/core";
import { TimeMessagingService } from './time-messaging.service';
import { UtilService } from "@warn/util";

@Component({
  selector: "lib-time-messaging",
  standalone: true,
  imports: [],
  template: ` <p>{{ now() }}</p> <p>Initialized at: {{ initializedAt() }}</p>`,
  styles: ``,
})
export class TimeMessagingComponent implements OnDestroy, OnInit {
  readonly #utilService = inject(UtilService);
  readonly #service = inject(TimeMessagingService);

  #timer?: any;

  protected readonly initializedAt = signal("");

  protected readonly now = signal("");

  ngOnInit(): void {
    this.initializedAt.set(
      this.#service.getCurentTime().toLocaleString()
    );

    this.#timer = setInterval(
      async () =>
        this.now.set(
          this.#utilService.formatMessage(
            (await import("./lazy-loaded-time-fn")).getCurrentTimeAsString()
          )
        ),
      1000
    );
  }

  ngOnDestroy(): void {
    if (this.#timer) {
      clearInterval(this.#timer);
    }
  }
}
