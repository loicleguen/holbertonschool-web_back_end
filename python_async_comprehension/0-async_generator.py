#!/usr/bin/env python3
"""This module contains an asynchronous generator that yields
10 random numbers between 0 and 10 with 1 second delay each."""
import asyncio
from random import uniform
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Asynchronous generator that yields 10 random numbers
    between 0 and 10 with a 1 second delay each."""
    for _ in range(10):
        await asyncio.sleep(1)
        random_number = uniform(0, 10)
        yield random_number
