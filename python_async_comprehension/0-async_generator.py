#!/usr/bin/env python3
"""Asynchronous generator module.

Contains a coroutine that yields 10 random numbers between 0 and 10
with a 1 second delay each."""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Asynchronous generator that yields 10 random numbers.

    Waits 1 second between each yield and produces a float between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)  # Wait asynchronously for 1 second
        yield random.uniform(0, 10)  # Yield a random float
