#!/usr/bin/env python3
"""Module that defines a function to multiply
two numbers with type annotations."""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns the product of multiplier and number."""
    def multiply(n: float) -> float:
        return n * multiplier
    return multiply
