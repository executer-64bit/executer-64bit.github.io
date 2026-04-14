# Robust AI-Generated Image Detection algorithm for NTIRE 2026.

_As part of the course's project of Image Security Spring 2026 at EURECOM by professor Jean-Luc Dugelay_

A modified image can be a very useful tool to deceive massive people with fake evidence & news to gain money and damage reputation. Once a friend of mine was selling his XBOX one and posting about it in his social media. One guy that was interested got in touch through messages with my friend, after my friend asked for a ticket deposit to then send his XBOX via delivery. The guy sent a modified picture of the ticket, my friend relied on him and sent the console. He was scammed.

It is sometimes easy to detect a fake image because its modifications are perceptible from the human vision. However, with the recent creation of more powerful techniques, this detection is not quite noticeable many times, even machines can fail in detecting them. Therefore, this is a relevant issue.

One competition that is about distinguish real and fake images is the [NTIRE 2026](https://www.codabench.org/competitions/12761/). In short words, our algorithm has to be robust enough to detect real and AI-generated images, but these fake images are transformed after being created (in-the-wild) to add more difficulty to the challenge.

__Proposed solution__
This type of challenge requires a powerful algorithm like a deep neural netwotk because it will be capable of finding statistical anomalies after a heavy training process. That is why EfficientNetB0 was proposed. It works in this way:
