#!/usr/bin/env python3
"""
This module contains a single coroutine that waits for a random delay and
returns it.
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Waits for a random delay between 0 and max_delay (inclusive) seconds
    and returns the delay.

    :param max_delay: The maximum delay in seconds
    :type max_delay: int
    :return: The random delay
    :rtype: float
    """
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay

if __name__ == "__main__":
    asyncio.run(wait_random())
